import React from 'react';
import ReactDOM from 'react-dom';
import antd from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
import Header from './Header';
import Footer from './Footer';
import enLocale from '../../en-US.js';
import cnLocale from '../../zh-CN.js';
import '../../static/style';

// Expose to iframe
window.react = React;
window['react-dom'] = ReactDOM;
window.antd = antd;

// Polyfill
const areIntlLocalesSupported = require('intl-locales-supported');
const localesMyAppSupports = ['zh-CN', 'en-US'];

if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(localesMyAppSupports)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    /* eslint-disable global-require */
    const IntlPolyfill = require('intl');
    /* eslint-enable global-require */
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  /* eslint-disable global-require */
  global.Intl = require('intl');
  /* eslint-enable global-require */
}

const isZhCN = (typeof localStorage !== 'undefined' && localStorage.getItem('locale') !== 'en-US');
  // (typeof localStorage !== 'undefined' && localStorage.getItem('locale') === 'zh-CN') ||
  // (navigator.language === 'zh-CN');

const appLocale = isZhCN ? cnLocale : enLocale;
addLocaleData(appLocale.data);

let gaListenerSetted = false;
export default class Layout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    if (typeof ga !== 'undefined' && !gaListenerSetted) {
      this.context.router.listen((loc) => {
        window.ga('send', 'pageview', loc.pathname + loc.search);
      });
      gaListenerSetted = true;
    }
    const loadingNode = document.getElementById('ant-site-loading');
    if (!loadingNode) {
      return;
    }
    this.timer = setTimeout(() => {
      loadingNode.parentNode.removeChild(loadingNode);
    }, 450);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const props = this.props;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <div className="page-wrapper">
          <Header {...props} />
          {props.children}
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}
