<template>

  <div class="bs-docs-section" id="addressselect">
    <h3 class="page-header"><a href="#addressselect" class="anchor">AddressSelect 地址选择 </a></h3>
    <div class="bs-example">
      <h4>无默认选中</h4>
      <address-select large level="2" placeholder="请选择省市"></address-select>
      <br>
      <address-select small level="3" placeholder="请选择省市区"></address-select>
      <br>
      <address-select level="4" placeholder="请选择省市区街道"></address-select>
      <br>
      <h4>有默认选中</h4>
      <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr1"></address-select>
      <br>
      <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr2"></address-select>
      <br>
      <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr3"></address-select>
      <br>
      <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr4"></address-select>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<address-select large level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr1"></address-select>
<address-select small level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr2"></address-select>
<address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr3"></address-select>
<address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr4"></address-select>
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
        <tr>
          <td>large</td>
          <td></td>
          <td></td>
          <td>组件尺寸，大</td>
        </tr>
        <tr>
          <td>small</td>
          <td></td>
          <td></td>
          <td>组件尺寸，小</td>
        </tr>
        <tr>
          <td>default-addr</td>
          <td><code>Object</code></td>
          <td><code>{
        provinceId: '',
        cityId: '',
        countyId: '',
        streetId: ''
      }</code></td>
          <td>默认要选中的省份、城市、县/区、街道对应ID</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddressSelect from 'src/widget/AddressSelect/'

export default {
  data () {
    return {
      defaultAddr1: {
        provinceId: '440000'
      },
      defaultAddr2: {
        provinceId: '440000',
        cityId: '440800'
      },
      defaultAddr3: {
        provinceId: '440000',
        cityId: '440800',
        countyId: '440883'
      },
      defaultAddr4: {
        provinceId: '440000',
        cityId: '440800',
        countyId: '440883',
        streetId: '440883001'
      }
    }
  },
  components: {
    AddressSelect
  },
  events: {
    'select-province' (prov, addressSelectVue) {
      console.log('选择的省份是：'+ prov.provinceName);
      console.log('选择的省份ID是：'+prov.provinceId)
    },
    'select-city' (city, addressSelectVue) {
      console.log('选择的城市是：'+ city.cityName);
      console.log('选择的城市ID是：'+city.cityId)
    },
    'select-county' (county, addressSelectVue) {
      console.log('选择的县/区是：'+ county.countyName);
      console.log('选择的县/区ID是：'+county.countyId)
    },
    'select-street' (street, addressSelectVue) {
      console.log('选择的街道是：'+ street.streetName);
      console.log('选择的街道ID是：'+street.streetId)
    }
  }
}
</script>
