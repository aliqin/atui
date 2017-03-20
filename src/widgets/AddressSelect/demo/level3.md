---
order: 0
title:
  zh-CN: 省市区
  en-US: Type
---

## zh-CN
选择省和市区

## en-US


````jsx
<span>{{addr.city}}</span>
<address-select level="3" placeholder="请选择省市区"  :city="addr.city" @select-province="select-province" @select-county="select-county" @select-city="select-city"></address-select>
````

````vue-script
new Vue({
  el: 'body',
  data () {
  	return {
  		addr:{
        county: '',
        province: '',
  			city: ''
  		}
  	}
  },
  components: {
    addressSelect: atuiWidget.AddressSelect
  },
	methods: {
    'select-city': function(data) {
      this.addr.city = data.cityName
    },
    'select-province': function(data) {
      this.addr.province = data.provinceName
    },
    'select-county': function(data) {
      this.addr.county = data.countyName
    }
  }
})
````
