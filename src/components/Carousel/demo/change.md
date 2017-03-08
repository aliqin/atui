---
order: 0
title:
  zh-CN: 动态改变
  en-US: Type
---

## zh-CN
动态增加或删除卡片



## en-US


````jsx
<carousel animation="fade" :speed="1000" >
  <slide>
    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=one&w=400&h=300&txttrack=0&bg=0096e0&txtclr=fff">
  </slide>
  <slide>
    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=two&w=400&h=300&txttrack=0&bg=ff7500&txtclr=fff">
  </slide>
  <slide>
    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=three&w=400&h=300&txttrack=0&bg=e52e2e&txtclr=fff">
  </slide>
  <slide v-if="hasFour">
    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=four&w=400&h=300&txttrack=0&bg=e52e2e&txtclr=fff">
  </slide>
</carousel>
<br/>
<button @click="showFour">添加第四张</button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
      carousel: atui.Carousel,
      slide: atui.Carousel.CSlide
  },
  data() {
    return {
      hasFour: false
    }
  },
  methods: {
    showFour() {
      this.hasFour = true
    }
  },
  events: {
    beforeChange (slide) {
      //console.log('beforeFade',slide)
    },
    afterChange (slide) {
      //console.log('afterFade',slide)
    }
  }
})
````
