---
order: 1
title:
  zh-CN: 渐显
  en-US: Type
---

## zh-CN




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
</carousel>
````

````vue-script
new Vue({
  el: 'body',
  components: {
      carousel: atui.Carousel,
      slide: atui.Carousel.Slide
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
