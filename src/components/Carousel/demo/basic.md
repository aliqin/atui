---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本的切换，默认是横向滚动切换



## en-US


````jsx
<carousel height="300px" control-btn>
  <slide>
    <img src="http://placehold.it/400x300?text=one">
    <div class="carousel-caption">
      这是一个说明内容
    </div>
  </slide>
  <slide>
    <img src="http://placehold.it/400x300?text=two">
  </slide>
  <slide>
    <img src="http://placehold.it/400x300?text=three">
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
        console.log('before',slide)
      },
      afterChange (slide) {
        console.log('after',slide)
      }
    }
})
````
