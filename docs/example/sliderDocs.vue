<template>
  <div class="bs-docs-section" id="slider">
    <h3 class="page-header"><a href="#slider" class="anchor">slider 滑动型输入器</a></h3>
    <div class="bs-example">
      <h4>basic</h4>
      <slider :value="30"></slider>
      <br><br>
      <slider :value="[20,50]"></slider>
      <br><br>
      <slider :value="[20,50]" disabled></slider>
      <br><br>
      <h4>带有输入框的滑块</h4>
      <v-row>
        <v-col span="14">
          <slider :value.sync="sliderValue"></slider>
        </v-col>
        <v-col span="10">
          <v-input type="text" :value.sync="sliderValue"></v-input>
        </v-col>
      </v-row>
      <h4>有取值区间的滑块</h4>
      <slider :value="1" :min="1" :max="21"></slider>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
basic
<slider :value="30"></slider>
<slider :value="[20,50]"></slider>
<slider :value="[20,50]" disabled></slider>
带有输入框的滑块
<v-row>
  <v-col span="14">
    <slider :value.sync="sliderValue"></slider>
  </v-col>
  <v-col span="10">
    <v-input type="text" :value.sync="sliderValue"></v-input>
  </v-col>
</v-row>
有取值区间的滑块
<slider :value="1" :min="1" :max="21"></slider>
  </script></code></pre>
    <table class="atui-table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td><code>String</code></td>
          <td><code>'slider' + new Date().getTime()</code></td>
          <td>滑块组件Id</td>
        </tr>
        <tr>
          <td>value</td>
          <td><code>String、Number、Array</code></td>
          <td><code>0</code></td>
          <td>默认值，类型为数字、数字型字符串、数字型数组、数字型数组字符串四种。<br>eg: 值为1或者'1'，表现为单滑块，终点是1，可更改位置；<br>eg: 值为[5,10]或者['5','10']，表现为双滑块，滑块起点和终点分别是5、10，并且位置都可更改</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td></td>
          <td></td>
          <td>配置该属性后，滑块被禁用</td>
        </tr>
        <tr>
          <td>min</td>
          <td><code>String、Number</code></td>
          <td><code>0</code></td>
          <td>滑块位置取值区间最小值</td>
        </tr>
        <tr>
          <td>max</td>
          <td><code>String、Number</code></td>
          <td><code>100</code></td>
          <td>滑块位置取值区间最大值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {Slider, Layout, Input} from 'src/';
const VCol = Layout.Col;
const VRow = Layout.Row;
const VInput = Input;

export default{
  components: {
    Slider,
    VCol,
    VRow,
    VInput
  },

  data () {
    return {
      sliderValue: 1
    }
  },

  watch: {
    sliderValue (val) {
      console.log('滑动后的值是：'+val);
    }
  },

  events: {
    'slider:onChange' (mod, values) {
      console.log('onChange');
      console.log(values);
    },
    'slider:onAfterChange' (mod, values) {
      console.log('onAfterChange');
      console.log(values);
    }
  }
}
</script>

