---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。




````jsx
<button class="btn btn-success btn-lg"
  @click="showRight = !showRight">
  点击在右边显示或隐藏
</button>
<button class="btn btn-success btn-lg"
  @click="showMessage">
  全局toast，使用message.xx方法
</button>
<button class="btn btn-default btn-lg"
  @click="showCenter = !showCenter">
  点击在中间显示或隐藏
</button>
<button class="btn btn-error btn-lg"
  @click="showTop = !showTop">
  点击在顶部显示或隐藏
</button>
<hr>
<message type="success" arrow="left">
  成功提示的文案
</message>

<message type="info" arrow="right">
  消息提示的文案
</message>

<message type="error" dismissable arrow="bottom">
  错误提示的文案,可关闭
</message>

<message type="warning" dismissable arrow="top">
  警告提示的文案,可关闭
</message>

<message type="help" dismissable>
  帮助提示文案,可关闭
</message>

<message
  :show.sync="showRight"
  :duration="3000"
  type="success"
  width="400px"
  placement="top-right"
  dismissable
>
  在右边显示的警告
</message>

<message
  :show.sync="showCenter"
  duration="3000"
  type="success"
  width="400px"
  placement="center"
  dismissable>
  在中间显示的警告
</message>

<message
  :show.sync="showTop"
  :duration="3000"
  type="error"
  width="400px"
  placement="top"
  dismissable>
  在顶部显示的警告
</message>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        message: atui.Message
    },
    data: function() {
        return {
            showRight: false,
            showCenter: false,
            showTop: false
        }
    },
    methods: {
        showMessage: function() {
            atui.Message.info('hello world!')
        }
    }
})
````