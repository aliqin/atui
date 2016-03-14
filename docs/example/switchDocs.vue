<template>
  <div class="bs-docs-section" id="switch">
    <h3 class="page-header"><a href="#switch" class="anchor">Switch 开关</a></h3>  
    <div class="bs-example">
      <h4 class="example-title" >基本类型</h4>
        <table class="switchDocs-demo-table">
          <tr>
            <th>关</th>
            <th>开</th>
            <th>禁用</th>
          </tr>
          <tr>
            <td><Switch class="small"></Switch></td>
            <td><Switch class="small" :checked="checked" :on-change="changeHandler"></Switch>
            <modal :show.sync="smallModal" width="400px">
              <div slot="modal-body" class="modal-body">当前状态为{{ checked ? '开' : '关' }}</div>
            </modal<
            /td>
            <td><Switch class="small" :disabled="disabled"></Switch></td>
          </tr>
          <tr>
            <td><Switch></Switch></td>
            <td><Switch :checked="checked" :on-change="changeHandler"></Switch></td>
            <td><Switch :disabled="disabled"></Switch></td>
          </tr>
        </table>
        
      <h4 class="example-title">带文字形式</h4>
        <Switch>
          <span slot="checkedPart">开</span>
          <span slot="unCheckedPart">关</span>
        </Switch>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<Switch class="small"></Switch>
<Switch class="small" :checked="checked" :on-change="changeHandler"></Switch>
<Switch class="small" :disabled="disabled"></Switch>
<Switch></Switch>
<Switch :checked="checked" :on-change="changeHandler"></Switch>
<Switch :disabled="disabled"></Switch>
<Switch>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</Switch>
</script></code></pre>
  </div>
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
        <td>checked</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>当前开关是否选中</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>当前开关是否禁用</td>
      </tr>
      <tr>
        <td>onChange</td>
        <td><code>Function(checked)</code></td>
        <td></td>
        <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>
      </tr>
      <tr>
        <td>slot::checkedPart</td>
        <td><code>slot node</code></td>
        <td></td>
        <td>选中时的内容</td>
      </tr>
      <tr>
        <td>slot::unCheckedPart</td>
        <td><code>slot node</code></td>
        <td></td>
        <td>没选中时的内容</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Switch from 'src/components/Switch.vue'
  import modal from 'src/components/Modal.vue'
  export default {
    data () {
      return {
        checked: true,
        disabled: true,
        smallModal: false
      }
    },
    components: {
      Switch,
      modal
    },
    methods: {
      changeHandler (checked) {
        this.checked = checked;
        this.smallModal = true;
      }
    }
  }
</script>

<style lang="less">
  .example-title {
    margin: 20px 0;
  }

  .switchDocs-demo-table {
    border: none;
    width: 50%;
    th {
      text-align: left;
    }
    td {
      text-align: left;
      padding: 10px;
      padding-left: 0;

    }
  }
</style>