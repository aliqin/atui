<template>

  <div class="bs-docs-section" id="addressselect">
    <h3 class="page-header"><a href="#addressselect" class="anchor">AddressSelect 地址选择 </a></h3>
    <div class="bs-example">
      <address-select level="2" placeholder="请选择省市"></address-select>
      <br>
      <address-select level="3" placeholder="请选择省市区"></address-select>
      <br>
      <address-select level="4" placeholder="请选择省市区街道"></address-select>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<address-select level="2" placeholder="请选择省市"></address-select>
<address-select level="3" placeholder="请选择省市区"></address-select>
<address-select level="4" placeholder="请选择省市区街道"></address-select>
    </script></code></pre>
    </script>
    </code>
    <h4>参数</h4>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>预期值的提示信息</td>
        </tr>
        <tr>
          <td>level</td>
          <td><code>String</code></td>
          <td><code>4</code></td>
          <td>省份-城市-县区-街道四级地址，要显示几级</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddressSelect from 'src/widget/AddressSelect/'

export default {
  components: {
    AddressSelect
  }
}
</script>
