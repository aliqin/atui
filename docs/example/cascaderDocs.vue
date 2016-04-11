<template>
  <div class="bs-docs-section" id="cascader">
    <h3 class="page-header"><a href="#cascader" class="anchor">Cascader 级联选择</a></h3>
    <div class="bs-example">
      <cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>

const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }]

  const defaultValue = ['zhejiang', 'hangzhou', 'xihu']

  import {Cascader} from 'src/'
  export default {
    components: {
      Cascader
    },
    data() {
      return {
        options:options,
        defaultValue:defaultValue
      }
    },
    methods:{
      selectChange(selectedValue, option) {
        alert(selectedValue)
      }
    }
  }
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
        <td>options</td>
        <td><code>Array</code></td>
        <td><code>[]</code></td>
        <td>要绑定的数据源</td>
      </tr>
      <tr>
        <td>defaultValue</td>
        <td><code>Array</code></td>
        <td><code>[]</code></td>
        <td>默认选中的值.</td>
      </tr>
      <tr>
        <td>change</td>
        <td><code>Function</code></td>
        <td><code>function(selectedValue, option) {}</code></td>
        <td>选择到最后一项触发的change事件
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }]

  const defaultValue = ['zhejiang', 'hangzhou', 'xihu']

  import {Cascader} from 'src/'
  export default {
    components: {
      Cascader
    },
    data() {
      return {
        options:options,
        defaultValue:defaultValue
      }
    },
    methods:{
      selectChange(selectedValue, option) {
        alert(selectedValue)
      }
    }
  }
</script>
