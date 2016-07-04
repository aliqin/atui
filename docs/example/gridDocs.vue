<template>
  <div class="bs-docs-section" id="grid">
    <h3 class="page-header"><a href="#grid" class="anchor">Grid 栅格 </a></h3>
    <div class="bs-example">
      <div class="grid-demo">
        <v-row>
          <v-col span="24">col-24</v-col>
        </v-row>
        <v-row>
          <v-col span="23">col-23</v-col>
          <v-col span="1">1</v-col>
        </v-row>
        <v-row>
          <v-col span="22">col-22</v-col>
          <v-col span="2">2</v-col>
        </v-row>
        <v-row>
          <v-col span="21">col-21</v-col>
          <v-col span="3">col-3</v-col>
        </v-row>
        <v-row>
          <v-col span="20">col-20</v-col>
          <v-col span="4">col-4</v-col>
        </v-row>
        <v-row>
          <v-col span="19">col-19</v-col>
          <v-col span="5">col-5</v-col>
        </v-row>
        <v-row>
          <v-col span="18">col-18</v-col>
          <v-col span="6">col-6</v-col>
        </v-row>
        <v-row>
          <v-col span="17">col-17</v-col>
          <v-col span="7">col-7</v-col>
        </v-row>
        <v-row>
          <v-col span="16">col-16</v-col>
          <v-col span="8">col-8</v-col>
        </v-row>
        <v-row>
          <v-col span="15">col-15</v-col>
          <v-col span="9">col-9</v-col>
        </v-row>
        <v-row>
          <v-col span="14">col-14</v-col>
          <v-col span="10">col-10</v-col>
        </v-row>
        <v-row>
          <v-col span="13">col-13</v-col>
          <v-col span="11">col-11</v-col>
        </v-row>
        <v-row>
          <v-col span="12">col-12</v-col>
          <v-col span="12">col-12</v-col>
        </v-row>
        <v-row>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
          <v-col span="1"></v-col>
        </v-row>
      </div>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<v-row>
  <v-col span="24">col-24</v-col>
</v-row>
<v-row>
  <v-col span="23">col-23</v-col>
  <v-col span="1">1</v-col>
</v-row>
<v-row>
  <v-col span="22">col-22</v-col>
  <v-col span="2">2</v-col>
</v-row>
<v-row>
  <v-col span="21">col-21</v-col>
  <v-col span="3">col-3</v-col>
</v-row>
<v-row>
  <v-col span="20">col-20</v-col>
  <v-col span="4">col-4</v-col>
</v-row>
<v-row>
  <v-col span="19">col-19</v-col>
  <v-col span="5">col-5</v-col>
</v-row>
<v-row>
  <v-col span="18">col-18</v-col>
  <v-col span="6">col-6</v-col>
</v-row>
<v-row>
  <v-col span="17">col-17</v-col>
  <v-col span="7">col-7</v-col>
</v-row>
<v-row>
  <v-col span="16">col-16</v-col>
  <v-col span="8">col-8</v-col>
</v-row>
<v-row>
  <v-col span="15">col-15</v-col>
  <v-col span="9">col-9</v-col>
</v-row>
<v-row>
  <v-col span="14">col-14</v-col>
  <v-col span="10">col-10</v-col>
</v-row>
<v-row>
  <v-col span="13">col-13</v-col>
  <v-col span="11">col-11</v-col>
</v-row>
<v-row>
  <v-col span="12">col-12</v-col>
  <v-col span="12">col-12</v-col>
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


