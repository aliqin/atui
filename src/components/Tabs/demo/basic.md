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




````jsx
<tabs>
  <tab header="系统短信签名">
    ...
  </tab>
  <tab header="推广短信签名">
    ...
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
</tabs>
<tabs :base="true" size="small">
  <tab header="系统短信签名">
    <p>
      选项卡一内容
    </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
</tabs>
<tabs :base="true" trigger="hover">
  <tab header="系统短信签名">
    <p>
      选项卡一内容
    </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
  <tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </tab>
</tabs>
<tabs @on-tab-click="handleOnClick">
  <tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
    <p>
      选项卡一内容
    </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
</tabs>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        tabs: atui.Tabs,
        tab: atui.Tabs.Tab
    }
})
````