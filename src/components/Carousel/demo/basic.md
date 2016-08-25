---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
该组件尚未完善



## en-US


````jsx
<carousel>
    <slide>
    <img src="http://placehold.it/1200x400?text=one">
    <div class="carousel-caption">
    </div>
  </slide>
  <slide>
    <img src="http://placehold.it/1200x400?text=two">
  </slide>
  <slide>
    <img src="http://placehold.it/1200x400?text=three">
  </slide>
</carousel>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        carousel: atui.Carousel,
        slide: atui.Carousel.Slide
    }
})
````
