<template>
  <div class="bs-docs-section" id="grid">
    <h3 class="page-header"><a href="#grid" class="anchor">Grid 栅格 </a></h3>
    <div class="bs-example">
      <div class="grid-demo">
        <v-row>
          <v-col span="24">col-lg-24</v-col>
        </v-row>
        <v-row>
          <v-col span="23">col-lg-23</v-col>
          <v-col span="1">1</v-col>
        </v-row>
        <v-row>
          <v-col span="22">col-lg-22</v-col>
          <v-col span="2">2</v-col>
        </v-row>
        <v-row>
          <v-col span="21">col-lg-21</v-col>
          <v-col span="3">col-lg-3</v-col>
        </v-row>
        <v-row>
          <v-col span="20">col-lg-20</v-col>
          <v-col span="4">col-lg-4</v-col>
        </v-row>
        <v-row>
          <v-col span="19">col-lg-19</v-col>
          <v-col span="5">col-lg-5</v-col>
        </v-row>
        <v-row>
          <v-col span="18">col-lg-18</v-col>
          <v-col span="6">col-lg-6</v-col>
        </v-row>
        <v-row>
          <v-col span="17">col-lg-17</v-col>
          <v-col span="7">col-lg-7</v-col>
        </v-row>
        <v-row>
          <v-col span="16">col-lg-16</v-col>
          <v-col span="8">col-lg-8</v-col>
        </v-row>
        <v-row>
          <v-col span="15">col-lg-15</v-col>
          <v-col span="9">col-lg-9</v-col>
        </v-row>
        <v-row>
          <v-col span="14">col-lg-14</v-col>
          <v-col span="10">col-lg-10</v-col>
        </v-row>
        <v-row>
          <v-col span="13">col-lg-13</v-col>
          <v-col span="11">col-lg-11</v-col>
        </v-row>
        <v-row>
          <v-col span="12">col-lg-12</v-col>
          <v-col span="12">col-lg-12</v-col>
        </v-row>
      </div>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<v-row>
  <v-col span="24">col-lg-24</v-col>
</v-row>
<v-row>
  <v-col span="23">col-lg-23</v-col>
  <v-col span="1">1</v-col>
</v-row>
<v-row>
  <v-col span="22">col-lg-22</v-col>
  <v-col span="2">2</v-col>
</v-row>
<v-row>
  <v-col span="21">col-lg-21</v-col>
  <v-col span="3">col-lg-3</v-col>
</v-row>
<v-row>
  <v-col span="20">col-lg-20</v-col>
  <v-col span="4">col-lg-4</v-col>
</v-row>
<v-row>
  <v-col span="19">col-lg-19</v-col>
  <v-col span="5">col-lg-5</v-col>
</v-row>
<v-row>
  <v-col span="18">col-lg-18</v-col>
  <v-col span="6">col-lg-6</v-col>
</v-row>
<v-row>
  <v-col span="17">col-lg-17</v-col>
  <v-col span="7">col-lg-7</v-col>
</v-row>
<v-row>
  <v-col span="16">col-lg-16</v-col>
  <v-col span="8">col-lg-8</v-col>
</v-row>
<v-row>
  <v-col span="15">col-lg-15</v-col>
  <v-col span="9">col-lg-9</v-col>
</v-row>
<v-row>
  <v-col span="14">col-lg-14</v-col>
  <v-col span="10">col-lg-10</v-col>
</v-row>
<v-row>
  <v-col span="13">col-lg-13</v-col>
  <v-col span="11">col-lg-11</v-col>
</v-row>
<v-row>
  <v-col span="12">col-lg-12</v-col>
  <v-col span="12">col-lg-12</v-col>
</v-row>
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
  import {Layout} from 'src/'
  const vRow = Layout.Row
  const vCol = Layout.Col
  export default {
    components: { vRow, vCol },
  }
</script>


