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
      <v-row>
        <slider :value="1" :min="1" :max="21"></slider>
      </v-row>
    </div>
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

