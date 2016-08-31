import React from 'react';
import DocumentTitle from 'react-document-title';
import Layout from '../Layout';
import Link from './Link';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Promise from 'bluebird';
import * as utils from '../utils';

export function collect(nextProps, callback) {
  //for atui
  // console.log('sfsdf',nextProps)
  const componentsList = utils.collectDocs(nextProps.data.src.components);
  Promise.all(componentsList)
    .then((list) => callback(null, { ...nextProps, components: list }));
}

export default class Home extends React.Component {
  componentWillMount() {
    if (location.hash) {
      const pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
      location.href = pathname;
    }
  }

  // To store style which is only for Home and has conflicts with others.
  getStyle() {
    return `
      #react-content,
      #react-content > div {
        height: 100%;
      }
      .main-wrapper {
        background: transparent;
        width: auto;
        margin: 0;
        border-radius: 0;
        padding: 0;
        overflow: unset;
        display: inline;
        min-height: 600px;
      }
      
      #header {
        position: fixed;
        height: 88px;
        z-index: 999;
        background: rgba(255, 255, 255,0);
        border-bottom: 1px solid transparent;
        transition: border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }

      .logoBg {
        width: 95px;
        height: 28px;
        background-image: url('//img.alicdn.com/tps/TB1_fcTMVXXXXbGXpXXXXXXXXXX-189-76.png');
        margin-top: 30px;
        margin-left: 35px;
      }

      #nav li {
        height: 88px;
        line-height: 88px;
      }

      #header .header-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 88px;
        background: #fff;
      }

      #header.header-hover .logoBg{
        background-image: url('//img.alicdn.com/tps/TB1hFZ7MVXXXXasXFXXXXXXXXXX-189-76.png');
      }

      @keyframes fadeIn {
        0% {
          opacity: 0; 
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      .fade-enter {
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-name: fadeIn;
        animation-play-state: running;
      }

      .fade-enter-active {
        
      }
      
      .fade-leave {
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-name: fadeOut;
        animation-play-state: running;
      }
      /*
      #header.fade-leave-active {
        animation-name: fadeOut;
        animation-play-state: running;
      }
      */

      #header .ant-select-selection,
      #header .ant-menu {
        background: transparent;
      }
      #header.home-nav-white {
        background: rgba(255, 255, 255, 0.9);
        border-bottom-color: #EBEDEE;
      }
      .home-nav-white #search-box {
        border-left-color: #EBEDEE;
      }
      .home-nav-white #nav a {
        color: #666;
      }
      .nav-phone-icon:before {
        background: #eee;
        box-shadow: 0 7px 0 0 #eee, 0 14px 0 0 #eee;
      }
      .home-nav-white .nav-phone-icon:before {
        background: #777;
        box-shadow: 0 7px 0 0 #777, 0 14px 0 0 #777;
      }
      #lang,
      #nav a {
        color: #eee;
        transition: color 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      #header.header-hover #nav a {
        color: #666;
      }
      #nav li.ant-menu-item-selected a{
        color: #fff;
      }

      #header.header-hover #nav li.ant-menu-item-selected a{
        color: #0087e0;
      }
      
      .ant-menu-horizontal>.ant-menu-item-selected,
      .ant-menu-horizontal>.ant-menu-item:hover,
      .ant-menu-horizontal>.ant-menu-item-selected:hover {
        border-bottom:2px solid #fff;
      }

      #header.header-hover .ant-menu-horizontal>.ant-menu-item-selected,
      #header.header-hover .ant-menu-horizontal>.ant-menu-item:hover,
      #header.header-hover .ant-menu-horizontal>.ant-menu-item-selected:hover {
        border-bottom: 2px solid #0087e0;
      }

      #search-box {
        border-left-color: rgba(235, 237, 238, .5);
        transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        display:none;
      }
      section {
        height: 100%;
        width: 100%;
        background: #fff;
      }
      #footer {
        background: #fff;
      }
      #footer,
      #footer h2 {
        color: #666;
      }
      #footer a {
        color: #0087e0;
      }
      .down {
        animation: upDownMove 1.2s ease-in-out infinite;
      }
    `;
  }

  render() {
    return (
      <DocumentTitle title="Atui - 阿里通信前端UI组件">
        <Layout {...this.props}>
          <div className="main-wrapper">
            <Banner />
            <style dangerouslySetInnerHTML={{ __html: this.getStyle() }} />
          </div>
        </Layout>
      </DocumentTitle>
    );
  }
}
