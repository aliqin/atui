<template>
  <div class="bs-docs-section" id="steps">
    <h3 class="page-header"><a href="#steps" class="anchor">Steps 步骤条</a></h3>  
    <div class="bs-example">
        <steps>
            <step></step>
        </steps>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">

</script></code></pre>
  </div>
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
        
      </tr>
      <tr>
        
      </tr>
    </tbody>
  </table>
</template>

<script>
  import steps from 'src/components/Steps.vue'
  import step from 'src/components/Step.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      steps,
      step
    }
  }
</script>

<style lang="less">
  .badge-count-example, .badge-dot-example {
    width: 42px;
    height: 42px;
    background-color: #eee;
    display: inline-block;
    border-radius: 6px;
  }
  .example-title {
    margin: 20px 0;
  }
</style>