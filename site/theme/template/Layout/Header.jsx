import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import enquire from 'enquire.js';
import { debounce } from 'lodash';
import classNames from 'classnames';
import { Select, Menu, Row, Col, Icon, Button } from 'antd';
const Option = Select.Option;

import '../../static/antd.min.css';

export default class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    intl: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.onScroll = debounce(() => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop >= clientHeight) {
        this.setState({ isFirstFrame: false });
      } else {
        this.setState({ isFirstFrame: true });
      }
    }, 100);

    this.onDocumentClick = (e) => {
      if (document.querySelector('#header .nav').contains(e.target)) {
        return;
      }
      this.setState({
        menuVisible: false,
      });
    };

    this.state = {
      menuVisible: false,
      menuMode: 'horizontal',
      isFirstFrame: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);

    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('touchstart', this.onDocumentClick);

    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        this.setState({ menuMode: 'inline' });
      },
      unmatch: () => {
        this.setState({ menuMode: 'horizontal' });
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('touchstart', this.onDocumentClick);
  }

  handleMenuIconClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      menuVisible: true,
    });
  }

  handleSearch = (value) => {
    this.context.router.push({ pathname: value });
  }

  handleSelectFilter = (value, option) => {
    return option.props['data-label'].indexOf(value) > -1;
  }

  handleLangChange = () => {
    if (typeof localStorage !== 'undefined') {
      const locale = this.context.intl.locale === 'zh-CN' ? 'en-US' : 'zh-CN';
      localStorage.setItem('locale', locale);
      location.reload();
    }
  }

  render() {
    const { routes, components } = this.props;
    const route = routes[0].path.replace(/^\//, '');
    let activeMenuItem = route.slice(0, route.indexOf(':') - 1) || 'home';
    if (activeMenuItem === 'components' || route === 'changelog') {
      activeMenuItem = 'docs/react';
    }

    const options = components
      .map(({ meta }) => {
        const pathSnippet = meta.filename.split('/')[2];
        const url = `/src/components/${pathSnippet}`;
        return (
          <Option value={url} key={url} data-label={`${(meta.title || meta.english)} ${meta.subtitle || meta.chinese}`}>
            <strong>{meta.title || meta.english}</strong>
            <span className="ant-component-decs">{meta.subtitle || meta.chinese}</span>
          </Option>
        );
      });

    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !this.state.isFirstFrame,
    });

    return (
      <header id="header" className={headerClassName}>
        <Row>
          <Col lg={4} md={6} sm={7} xs={24}>
            <Icon
              className="nav-phone-icon"
              onClick={this.handleMenuIconClick}
              type="menu"
            />
            <Link to="/" id="logo">
              <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>Ant Design</span>
            </Link>
          </Col>
          <Col className={`nav ${this.state.menuVisible ? 'nav-show' : ''}`}
            lg={20} md={18} sm={17} xs={0} style={{ display: 'block' }}
          >
            <div id="search-box">
              <Select combobox
                dropdownClassName="component-select"
                placeholder="搜索组件..."
                value={undefined}
                optionFilterProp="data-label"
                optionLabelProp="data-label"
                filterOption={this.handleSelectFilter}
                onSelect={this.handleSearch}
              >
                {options}
              </Select>
            </div>
            {
              location.port ? (
                <Button id="lang" type="ghost" size="small" onClick={this.handleLangChange}>
                  <FormattedMessage id="app.header.lang" />
                </Button>
              ) : null
            }
            <Menu mode={this.state.menuMode} selectedKeys={[activeMenuItem]} id="nav">
              <Menu.Item key="home">
                <Link to="/">
                  <FormattedMessage id="app.header.menu.home" />
                </Link>
              </Menu.Item>
              <Menu.Item key="docs/practice">
                <Link to="/docs/practice/cases">
                  <FormattedMessage id="app.header.menu.practice" />
                </Link>
              </Menu.Item>
              {/*<Menu.Item key="docs/pattern">
                <Link to="/docs/pattern/navigation">
                  <FormattedMessage id="app.header.menu.pattern" />
                </Link>
              </Menu.Item>*/}
              <Menu.Item key="docs/react">
                <Link to="/docs/react/introduce">
                  <FormattedMessage id="app.header.menu.react" />
                </Link>
              </Menu.Item>
              {/*<Menu.Item key="docs/spec">
                <Link to="/docs/spec/introduce">
                  <FormattedMessage id="app.header.menu.spec" />
                </Link>
              </Menu.Item>*/}
              <Menu.Item key="docs/resource">
                <Link to="/docs/resource/download">
                  <FormattedMessage id="app.header.menu.resource" />
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
