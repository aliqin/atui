---
category: Components
title: Trigger
subtitle: 触发器
---

使用触发器,通过click|hover|focus等行为触发一个弹窗。

## 何时使用

供其他UI组件如Tooltip|Popover|Select等组件调用。

## API

### Props

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
trigger | 以何种方式触发显示气泡框,可选hover, click, focus | `string` | `click`
effect | 弹窗的过渡效果，可选scale, fadein | `string` | `scale`
placement | 定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight | `string` | `bottom`
width | 设置trigger宽度, 如`200px`、`50%` | `string` | `auto`
offset | popup偏移量, 如`[0, 50]`,横向不偏移,纵向偏移50px | `Array` | `[0, 0]`
popupCls | 设置默认的popup的样式名 | `string` | `popup`
customPopupCls | 自定义popup的class名 | `string` | `''`
popupZIndex | 设置popup的zindex | `number` | 无
popupAlwaysInView | 是否支持坐标智能检测,保证弹窗优先在视图区域可见,默认开启 | `boolean` | `true`
popupAlwaysShow | 永远展示popup,并且默认展示 | `boolean` | `false`
popupHideWhenClickOutside | 点击trigger组件外部区域的时候,是否隐藏popup浮层,默认不隐藏 | `boolean` | `false`
popupCoverTrigger | popup弹出的时候,刚好盖住trigger,todo: 增强trigger和popup坐标对齐方式 | `boolean` | `false`

### Events

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
@reset-pos | popup定位事件 | `function($trigger, $popup, placement)` | 无
@toggle-popup | popup切换显示隐藏状态事件,true表示可见 | `function(show)` | 无

<style>
  .atui-trigger-cont {
    margin: 10px 0;
  }
</style>
