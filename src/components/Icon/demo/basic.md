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
<icon type="head"></icon>页首
<icon type="tail"></icon>页尾
<icon type="clear"></icon>清除
<icon type="close"></icon>关闭
<icon type="search"></icon>搜索
<icon type="up"></icon>向上
<icon type="down"></icon>向下
<icon type="prev"></icon>上一页
<icon type="next"></icon>下一页
<icon type="warning" color="red" size="20"></icon>警告
<icon type="error"></icon>错误
<icon type="info"></icon>信息
<icon type="help"></icon>帮助
<icon type="success"></icon>成功
<icon type="filter"></icon>过滤
<icon type="doc"></icon>附件
<icon type="calendar"></icon>日历
<icon type="tick"></icon>对勾
````

````vue-script
new Vue({
    el: 'body',
    components: {
        icon: atui.Icon
    }
})
````