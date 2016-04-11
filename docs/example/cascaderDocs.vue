<template>
  <div class="bs-docs-section" id="cascader">
    <h3 class="page-header"><a href="#cascader" class="anchor">Cascader 级联选择</a></h3>
    <div class="bs-example">
      <cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>

const options = [{"value":"2016","label":"2016年","children":[{"value":"01","label":"一月","disabled":false},{"value":"02","label":"二月","disabled":false},{"value":"03","label":"三月","disabled":false},{"value":"04","label":"四月","disabled":true},{"value":"05","label":"五月","disabled":true},{"value":"06","label":"六月","disabled":true},{"value":"07","label":"七月","disabled":true},{"value":"08","label":"八月","disabled":true},{"value":"09","label":"九月","disabled":true},{"value":"10","label":"十月","disabled":true},{"value":"1
1","label":"十一月","disabled":true},{"value":"12","label":"十二月","disabled":true}]},{"value":"2015","label":"2015年","children":[{"value":"01","label":"一月"},{"value":"02","label":"二月"},{"value":"03","label":"三月"},{"value":"04","label":"四月"},{"value":"05","label":"五月"},{"value":"06","label":"六月"},{"value":"07","label":"七月"},{"value":"08","label":"八月"},{"value":"09","label":"九月"},{"value":"10","label":"十月"},{"value":"11","label":"十一月"},{"value":"12","label":"十二月"}]}]

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
  const options = [{"value":"2016","label":"2016年","children":[{"value":"01","label":"一月","disabled":false},{"value":"02","label":"二月","disabled":false},{"value":"03","label":"三月","disabled":false},{"value":"04","label":"四月","disabled":true},{"value":"05","label":"五月","disabled":true},{"value":"06","label":"六月","disabled":true},{"value":"07","label":"七月","disabled":true},{"value":"08","label":"八月","disabled":true},{"value":"09","label":"九月","disabled":true},{"value":"10","label":"十月","disabled":true},{"value":"11","label":"十一月","disabled":true},{"value":"12","label":"十二月","disabled":true}]},{"value":"2015","label":"2015年","children":[{"value":"01","label":"一月"},{"value":"02","label":"二月"},{"value":"03","label":"三月"},{"value":"04","label":"四月"},{"value":"05","label":"五月"},{"value":"06","label":"六月"},{"value":"07","label":"七月"},{"value":"08","label":"八月"},{"value":"09","label":"九月"},{"value":"10","label":"十月"},{"value":"11","label":"十一月"},{"value":"12","label":"十二月"}]}]



  const defaultValue = ['2016', '01']

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
