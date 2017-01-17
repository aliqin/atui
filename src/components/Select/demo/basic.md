---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本使用方式


## en-US


````jsx
<v-select :default-value="initValue" style="width:200px" @change="onSelectChange">
  <v-option value="Apple">苹果</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="10">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
  <v-option value="chestnut">栗子</v-option>
  <v-option value="pear">梨</v-option>
  <v-option value="cantaloupe">哈密瓜</v-option>
  <v-option value="peaches">水蜜桃</v-option>
  <v-option value="Cherry2">Cherry2</v-option>
  <v-option value="Orange2">OrangeText2</v-option>
  <v-option value="Grape2">Grape2</v-option>
  <v-option value="chestnut2">栗子2</v-option>
  <v-option value="pear2">梨2</v-option>
  <v-option value="cantaloupe2">哈密瓜2</v-option>
  <v-option value="peaches2">水蜜桃2</v-option>
</v-select>
<br/>
<v-button @click.native="changeSelect">改变选中项</v-button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vSelect: atui.Select,
    vButton: atui.Button,
    vOption: atui.Select.Option
  },
  data() {
    return {
      single: '',
      initValue: 'Apple',
      initObj: {
        val:'Apple'
      },
      activities: [
        {
          id:1,
          text:'111'
        },{
          id:2,
          text:'222'
        }
      ]
    }
  },
  methods: {
    onSelectChange (obj) {
      this.single = obj.value;
    },
    changeSelect () {
      this.initValue = 'Orange';
    }
  }
})
````
