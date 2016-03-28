<template>
  <div class="bs-docs-section" id="grid">
    <h3 class="page-header"><a href="#grid" class="anchor">Grid 栅格 </a></h3>
    <div class="bs-example">
      <div class="container grid-demo">
        <v-row>
          <div class="col-lg-24">col-lg-24</div>
        </v-row>
        <v-row>
          <div class="col-lg-23">col-lg-23</div>
          <div class="col-lg-1">1</div>
        </v-row>
        <v-row>
          <div class="col-lg-22">col-lg-22</div>
          <div class="col-lg-2">2</div>
        </v-row>
        <v-row>
          <div class="col-lg-21">col-lg-21</div>
          <div class="col-lg-3">col-lg-3</div>
        </v-row>
        <v-row>
          <div class="col-lg-20">col-lg-20</div>
          <div class="col-lg-4">col-lg-4</div>
        </v-row>
        <v-row>
          <div class="col-lg-19">col-lg-19</div>
          <div class="col-lg-5">col-lg-5</div>
        </v-row>
        <v-row>
          <div class="col-lg-18">col-lg-18</div>
          <div class="col-lg-6">col-lg-6</div>
        </v-row>
        <v-row>
          <div class="col-lg-17">col-lg-17</div>
          <div class="col-lg-7">col-lg-7</div>
        </v-row>
        <v-row>
          <div class="col-lg-16">col-lg-16</div>
          <div class="col-lg-8">col-lg-8</div>
        </v-row>
        <v-row>
          <div class="col-lg-15">col-lg-15</div>
          <div class="col-lg-9">col-lg-9</div>
        </v-row>
        <v-row>
          <div class="col-lg-14">col-lg-14</div>
          <div class="col-lg-10">col-lg-10</div>
        </v-row>
        <v-row>
          <div class="col-lg-13">col-lg-13</div>
          <div class="col-lg-11">col-lg-11</div>
        </v-row>
        <v-row>
          <div class="col-lg-12">col-lg-12</div>
          <div class="col-lg-12">col-lg-12</div>
        </v-row>
      </div>
    </div>
    <v-row>
      <v-col span="5">5</v-col>
      <v-col span="19">19</v-col>
    </v-row>
    <pre><code class="language-markup"><script type="language-mark-up">

</script></code></pre>
    </script>
    </code>
  </div>
</template>
<style>
  .grid-demo .row{
    margin:5px 0;
  }
  .grid-demo .row > div{
    text-align: center;
    line-height: 30px;
    height: 30px;
    background: #99EAD8;
    background-clip: content-box;
  }
</style>
<script>
  import Layout from 'src/components/Layout/'
  const vRow = Layout.Row
  const vCol = Layout.Col
  export default {
    components: { vRow, vCol },
  }
</script>


