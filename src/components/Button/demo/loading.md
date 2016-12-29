---
order: 6
title:
  zh-CN: 带loading的按钮
  en-US: Type
---

## zh-CN

带loading的按钮

## en-US

````jsx
<v-button large primary :loading="loading" value="点击加载" @click.native="onBtnClick('hi')"></v-button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button
  },
  data: {
  	loading: false
  },
  methods: {
  	onBtnClick: function(e){
      debugger
  		this.loading = !this.loading
  	}
  }
})
````
