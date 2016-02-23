<template>
  <div class="bs-docs-section" id="alert">
    <h3 class="page-header">
      <a href="#alert" class="anchor">Alert 警告提示</a>
    </h3>
    <div class="bs-example" >
      <button class="btn btn-success btn-lg"
        @click="showRight = !showRight">
        点击在右边显示或隐藏
      </button>

      <button class="btn btn-danger btn-lg"
        @click="showTop = !showTop">
        点击在顶部显示或隐藏
      </button>
      <hr>
      <alert type="success" >
        成功提示的文案
      </alert>

      <alert type="info" >
        消息提示的文案
      </alert>

      <alert type="danger" dismissable>
        错误提示的文案
      </alert>

      <alert type="warning" dismissable>
        警告提示的文案
      </alert>

      <alert
        :show.sync="showRight"
        :duration="3000"
        type="success"
        width="400px"
        placement="top-right"
        dismissable
      >
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <p>成功提示的文案</p>
      </alert>

      <alert
        :show.sync="showTop"
        :duration="3000"
        type="danger"
        width="400px"
        placement="top"
        dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <p>This alert needs your attention.</p>
      </alert>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
<button class="btn btn-default btn-lg"
  @click="showRight = !showRight">
  点击在右边显示或隐藏

<button class="btn btn-default btn-lg"
  @click="showTop = !showTop">
  点击在顶部显示或隐藏
</button>
<hr>
<alert type="success" >
  成功啦，恭喜你！
</alert>

<alert type="info" >
  这是一个消息提醒，你需要注意.
</alert>

<alert type="danger" dismissable>
  啊哦，出现了一个错误！
</alert>

<alert type="warning" dismissable>
  注意，这是一个警告！
</alert>

<alert
  show="{{showRight}}"
  duration="3000"
  type="success"
  width="400px"
  placement="top-right"
  dismissable>
  <span class="icon-ok-circled alert-icon-float-left"></span>
  <strong>Well Done!</strong>
  <p>You successfully read this important alert message.</p>
</alert>

<alert
  show="{{showTop}}"
  duration="3000"
  type="info"
  width="400px"
  placement="top"
  dismissable>
  <span class="icon-info-circled alert-icon-float-left"></span>
  <strong>Heads up!</strong>
  <p>This alert needs your attention.</p>
</alert>

</script></code></pre>

    <h2>Options</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show</td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td>Whether show the component</td>
        </tr>
        <tr>
          <td>dismissable</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether show close button</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, one of
          <code>success</code>
          <code>info</code>
          <code>warning</code>
          <code>danger</code></td>
          <td><code>success</code></td>
          <td>Components styles</td>
        </tr>
        <tr>
          <td>duration</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>
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
          <td>how to position the component.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import alert from 'src/components/Alert.vue'
  export default {
    data() {
      return {
        showRight: false,
        showTop: false
      }
    },
    components: {
      alert,
    }
  }
</script>

<style>
  .alert-icon-float-left {
    font-size:32px;float:left;margin-right:5px;
  }
</style>
