---
order: 0
english: Ant Design of React
---

这里是 Ant Design 的 React 实现，开发和服务于企业级后台产品。

<div class="pic-plus">
  <img width="150" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## 特性

- Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。
- [React Component](http://react-component.github.io/badgeboard/) 上精心封装的高质量 UI 库。
- 基于 npm + webpack + babel 的工作流，支持 ES2015。

## 安装

```bash
$ npm install antd
```

## 示例

```jsx
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

按需加载可通过此写法 `import DatePicker from 'antd/lib/date-picker'` 或使用插件 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd)（此插件支持 js 和 css 同时按需加载）。


## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd)
- 开发版：[![](https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm)](https://www.npmjs.org/package/antd)

## 浏览器支持

现代浏览器和 IE8 及以上。

> [IE8 issues](https://github.com/xcatliu/react-ie8)

## 链接

- [首页](http://ant.design/)
- [更新日志](/changelog)
- [开发脚手架](https://github.com/ant-design/antd-init/)
- [开发工具文档](http://ant-tool.github.io/)
- [React 组件](http://react-component.github.io/)
- [React 代码规范](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [组件设计原则](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)
- [设计规范速查手册](https://os.alipayobjects.com/rmsportal/HTXUgPGkyyxEivE.png)
- [社区贡献脚手架和范例](https://github.com/ant-design/ant-design/issues/129)

## 谁在使用

- 蚂蚁金服
- 阿里巴巴
- 口碑
- 新美大
- 滴滴

> 如果你的公司和产品使用了 Ant Design，欢迎到 [这里](https://github.com/ant-design/ant-design/issues/477) 留言。

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md)。有任何建议或意见您可以 [Pull Request](https://github.com/ant-design/ant-design/pulls)，给我们 [报告 Bug](https://github.com/ant-design/ant-design/issues/new) 或 [提问](https://github.com/ant-design/ant-design/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。
