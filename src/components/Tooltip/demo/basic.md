---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

## en-US

There are primary button, default button, ghost button and dashed button in antd.

`type` can be set as `primary` or `ghost` or `dashed`, in order to create primary button or ghost button or dashed button. If nothing is provided to `type`, we will get default button. Users can tell the significance of button from it's appearance.

Primary button and default button can be used without other button, but ghost button must be used with primary button.



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