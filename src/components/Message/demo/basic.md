---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


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
