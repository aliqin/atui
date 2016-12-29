---
order: 1
title:
  zh-CN: 不同位置
  en-US: Type
---

## zh-CN

位置有 12 个方向。

## en-US


````jsx
<div>
  <div :style="{marginLeft: '60px'}">
    <v-tooltip content="提示内容" placement="topLeft">
    <v-button>左上角</v-button>
    </v-tooltip>
    <v-tooltip content="提示内容" placement="top">
    <v-button>上边</v-button>
    </v-tooltip>
    <v-tooltip content="提示内容" placement="topRight">
    <v-button>上右</v-button>
  </div>
  <div :style="{width: '60px', float: 'left'}">
    <v-tooltip content="提示内容" placement="leftTop">
    <v-button>左上</v-button>
    </v-tooltip>
    <v-tooltip content="提示内容" placement="left">
    <v-button>左边</v-button>
    </v-tooltip>
    <v-tooltip content="提示内容" placement="leftBottom">
    <v-button>左下</v-button>
    </v-tooltip>
  </div>
  <div :style="{width: '60px', marginLeft: '270px'}">
    <v-tooltip content="提示内容" placement="rightTop">
      <v-button>右上</v-button>
    </v-tooltip>
    <v-tooltip content="提示内容" placement="right">
      <v-button>右边</v-button>
    </v-tooltip>
    <v-tooltip content="提示内容" placement="rightBottom">
      <v-button>右下</v-button>
    </v-tooltip>
  </div>
  <div :style="{marginLeft: '60px', clear: 'both'}">
    <v-tooltip  placement="bottomLeft" content="提示内容">
      <v-button>下左</v-button>
    </v-tooltip>
    <v-tooltip  placement="bottom" content="提示内容">
      <v-button>下边</v-button>
    </v-tooltip>
    <v-tooltip  placement="bottomRight" content="提示内容">
      <v-button>下右</v-button>
    </v-tooltip>
  </div>
</div>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTooltip: atui.Tooltip,
    vButton: atui.Button
  }
})
````
<style>
  .atui-popover-cont .atui-btn {
    display: inline-block;
    margin-right: 1em;
    margin-bottom: 1em;
    border-radius: 6px;
}
</style>
