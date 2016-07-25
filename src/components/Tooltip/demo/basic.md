---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<tooltip content="talk is cheap show me the code" placement="topLeft">
<button class="atui-btn atui-btn-default ">上左</button>
</tooltip>
<tooltip content="talk is cheap show me the code" placement="top">
<button class="atui-btn atui-btn-default ">上边</button>
</tooltip>
<tooltip content="Lorem ipsum dolor sit amet" placement="topRight">
<button class="atui-btn atui-btn-default ">上右</button>
</tooltip>
<tooltip content="what does the fox say ？" placement="leftTop">
<button class="atui-btn atui-btn-default ">左上</button>
</tooltip>
<tooltip content="Are you kidding me?" placement="left">
<button class="atui-btn atui-btn-default ">左边</button>
</tooltip>
<tooltip content="no, i'm serious! " placement="leftBottom">
<button class="atui-btn atui-btn-default ">左下</button>
</tooltip>
<tooltip content="bang bang bang!" placement="rightTop">
  <button class="atui-btn atui-btn-default ">右上</button>
</tooltip>
<tooltip content="Lorem ipsum dolor sit amet" placement="right">
  <button class="atui-btn atui-btn-default ">右边</button>
</tooltip>
<tooltip content="Lorem ipsum dolor sit amet" placement="rightBottom">
  <button class="atui-btn atui-btn-default ">右下</button>
</tooltip>
<tooltip  placement="bottomLeft" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="atui-btn atui-btn-default ">下左</button>
</tooltip>
<tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="atui-btn atui-btn-default ">下边</button>
</tooltip>
<tooltip  placement="bottomRight" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="atui-btn atui-btn-default ">下右</button>
</tooltip>
<tooltip trigger="click"
  effect="fadein" content="提示文字" placement="top" trigger="hover">
  <button class="atui-btn atui-btn-default ">Click</button>
  </tooltip>
<tooltip effect="scale"
content="Lorem ipsum dolor sit amet" placement="topLeft" trigger="focus">
  <input type="text" class="form-control" placeholder="Focus">
</tooltip>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        tooltip: atui.Tooltip
    }
})
````
