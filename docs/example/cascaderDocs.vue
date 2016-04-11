<template>
  <div class="bs-docs-section" id="cascader">
    <h3 class="page-header"><a href="#cascader" class="anchor">Cascader 级联选择</a></h3>
    <div class="bs-example">
      <cascader :options="options" @change="onChange" :defaultValue="defaultValue"></cascader>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

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
        <td>indicators</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the indicators.</td>
      </tr>
      <tr>
        <td>controls</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the direction controls.</td>
      </tr>
      <tr>
        <td>interval</td>
        <td><code>Number</code></td>
        <td><code>5000</code></td>
        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
          carousel will not automatically cycle.
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
  }];

  import {Cascader} from 'src/'
  export default {
    components: {
      Cascader
    },
    data() {
      return {
        options:options,
        defaultValue:['zhejiang', 'hangzhou', 'xihu']

      }
    },
    methoeds:{
      onChange(selectedValue, option) {
        console.log(selectedValue, option)
      }
    }
  }
</script>
