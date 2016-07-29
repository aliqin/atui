---
category: Components
chinese: 全局提示
type: Views
noinstant: true
english: Message
---

全局展示操作反馈信息。


警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
| type       | 必选参数，指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`   | String     | `info`    |
| closable   | 可选参数，默认不显示关闭按钮                                  | Boolean   | 无    |
| showIcon   | 可选参数，是否显示辅助图标                                 | Boolean   | false    |
| @close     | 可选参数，关闭时触发的回调函数                                | Function   | 无    |


## JS调用API

- `message.success(content, duration, placement)`
- `message.error(content, duration, placement)`
- `message.info(content, duration, placement)`
- `message.warning(content, duration, placement)`
- `message.loading(content, duration, placement)`

组件提供了四个静态方法，参数如下：

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|--------------------------|--------------|
| content    | 提示内容       | String    | -           |
| duration   | 自动关闭的延时，单位秒 | number               | 1.5          |
| placement  | 显示位置，有三种可选`top`、`top-right`、`center` | string | top


