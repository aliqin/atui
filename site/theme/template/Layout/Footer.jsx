import React from 'react';
import { Select, Modal } from 'antd';
import { version as antdVersion } from 'antd/package.json';
import { docVersions } from '../../';
const Option = Select.Option;

function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

docVersions[antdVersion] = antdVersion;

export default class Footer extends React.Component {
  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (localStorage.getItem('infoNewVersionSent') !== 'true' &&
        new Date().getTime() < new Date('2016/05/22').getTime()) {
      this.infoNewVersion();
    }
  }

  infoNewVersion() {
    Modal.info({
      title: 'antd 新版发布！',
      content: (
        <div>

        </div>
      ),
      onOk: () => localStorage.setItem('infoNewVersionSent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  handleVersionChange = (url) => {
    window.location.href = url;
  }

  render() {
    const options = Object.keys(docVersions).map(version => (
      <Option value={docVersions[version]} key={version}>{version}</Option>
    ));
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>GitLab</h2>
            <div>
              <a target="_blank " href="http://gitlab.alibaba-inc.com/aliqin/atui/">仓库</a>
            </div>

          </li>
          <li>
            <h2>相关站点</h2>

          </li>
          <li>
            <h2>联系我们</h2>
            <div>
              <a target="_blank" href="http://gitlab.alibaba-inc.com/aliqin/atui/issues">
                反馈和建议
              </a>
            </div>
            <div>
              <a target="_blank" href="http://gitlab.alibaba-inc.com/aliqin/atui">
                讨论
              </a>
            </div>
            <div>
              <a target="_blank" href="http://gitlab.alibaba-inc.com/aliqin/atui/issues/new">
                报告 Bug
              </a>
            </div>
          </li>
          <li>
            <div>©2016 阿里通信前端</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
          </li>
        </ul>
      </footer>
    );
  }
}
