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
<address-select level="3" placeholder="请选择省市区"  :city.sync="addr.city" ></address-select>
````

````vue-script
new Vue({
  el: 'body',
  data:function(){
  	return {
  		addr:{
  			city:'aa'
  		}
  	}
  },
  components: {
    addressSelect: atuiWidget.AddressSelect
  },
  events: {
  	'select-city': function(data){
  		console.log(data)
  	},
  	'select-province': function(data){
  		console.log(data)
  	},
  	'select-county': function(data){
  	
  	}
  }
})
````
