<template>
  <div class="bs-docs-section" id="message">
    <h3 class="page-header">
      <a href="#message" class="anchor">Message 警告提示</a>
    </h3>
    <div class="bs-example" >
      <button class="btn btn-success btn-lg"
        @click="showRight = !showRight">
        点击在右边显示或隐藏
      </button>
      <button class="btn btn-success btn-lg"
        @click="showMessage">
        代码调用，不需要在页面中写组件标签
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
      <message type="success" >
        成功提示的文案
      </message>

      <message type="info" >
        消息提示的文案
      </message>

      <message type="error" dismissable>
        错误提示的文案,可关闭
      </message>

      <message type="warning" dismissable>
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
        <span class="icon-ok-circled message-icon-float-left"></span>
        <p>在右边显示的警告</p>
      </message>

      <message
        :show.sync="showCenter"
        duration="3000"
        type="success"
        width="400px"
        placement="center"
        dismissable>
        <span class="icon-ok-circled message-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>在中间显示的警告.</p>
      </message>

      <message
        :show.sync="showTop"
        :duration="3000"
        type="error"
        width="400px"
        placement="top"
        dismissable>
        <span class="icon-info-circled message-icon-float-left"></span>
        <p>在顶部显示的警告</p>
      </message>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
<button class="btn btn-success btn-lg"
        @click="showRight = !showRight">
        点击在右边显示或隐藏
      </button>
      <button class="btn btn-success btn-lg"
        @click="showMessage">
        代码调用，不需要在页面中写组件标签
      </button>
      <button class="btn btn-default btn-lg"
        @click="showCenter = !showCenter">
        点击在中间显示或隐藏
      </button>
      <button class="btn btn-danger btn-lg"
        @click="showTop = !showTop">
        点击在顶部显示或隐藏
      </button>
      <hr>
      <message type="success" >
        成功提示的文案
      </message>

      <message type="info" >
        消息提示的文案
      </message>

      <message type="danger" dismissable>
        错误提示的文案,可关闭
      </message>

      <message type="warning" dismissable>
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
        <span class="icon-ok-circled message-icon-float-left"></span>
        <p>在右边显示的警告</p>
      </message>

      <message
        :show="showCenter"
        duration="3000"
        type="success"
        width="400px"
        placement="center"
        dismissable>
        <span class="icon-ok-circled message-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>在中间显示的警告.</p>
      </message>

      <message
        :show.sync="showTop"
        :duration="3000"
        type="danger"
        width="400px"
        placement="top"
        dismissable>
        <span class="icon-info-circled message-icon-float-left"></span>
        <p>在顶部显示的警告</p>
      </message>

</script></code></pre>

    <h2>Options</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show</td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td>是否显示</td>
        </tr>
        <tr>
          <td>dismissable</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否显示关闭按钮</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, one of
          <code>success</code>
          <code>info</code>
          <code>warning</code>
          <code>danger</code>
          <code>help</code>
          </td>
          <td><code>success</code></td>
          <td>组件样式</td>
        </tr>
        <tr>
          <td>duration</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>String</code></td>
          <td></td>
        </tr>
        <tr>
          <td>placement</td>
          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>
          <td></td>
          <td>组件的位置</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {Message} from 'src/'
  export default {
    data() {
      return {
        showRight: false,
        showTop: false,
        showCenter:false
      }
    },
    components: {
      Message,
    },
    methods:{
      showMessage() {
        Message.error('我错误啦～～')
      }
    }
  }
</script>

<style>
  .message-icon-float-left {
    font-size:32px;float:left;margin-right:5px;
  }
</style>
