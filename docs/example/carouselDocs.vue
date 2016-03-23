<template>
  <div class="bs-docs-section" id="carousel">
    <h3 class="page-header"><a href="#caoursel" class="anchor">Carousel 走马灯</a></h3>
    <div class="bs-example">
      <carousel indicators="true" controls="true">
        <slider>
          <img style="width:100%" src="https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png">
          <div class="carousel-caption">
           <h3>Slide #1</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img style="width:100%" src="https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png">
          <div class="carousel-caption">
           <h3>Slide #2</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img style="width:100%" src="https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg">
          <div class="carousel-caption">
           <h3>Slide #3</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
      </carousel>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<carousel>
  <slider>
    <img src="http://placehold.it/1200x400?text=one">
      <div class="carousel-caption">
       ...
     </div>
  </slider>
  <slider>
    <img src="http://placehold.it/1200x400?text=two">
  </slider>
  <slider>
    <img src="http://placehold.it/1200x400?text=three">
  </slider>
</carousel>
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
        <td>indicators</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the indicators.</td>
      </tr>
      <tr>
        <td>controls</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the direction controls.</td>
      </tr>
      <tr>
        <td>interval</td>
        <td><code>Number</code></td>
        <td><code>5000</code></td>
        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
          carousel will not automatically cycle.
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import carousel from 'src/components/Carousel.vue'
  import slider from 'src/components/Slider.vue'
  export default {
    components: {
      carousel,
      slider
    }
  }
</script>
