---
category: Components
type: Views
title: Carousel
subtitle: 走马灯
---


## 何时使用


## API



### Carousel

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
width | 宽度 | String | auto
height | 高度，必须传，不能自适应 | String | 400px
interval | 自动播放时的间隔时间 | Number | 3000
speed | 切换速度 | Number | 500
indicators | 圆点指示器 | String | center
controlBtn | 左右控制按钮,默认显示 | Boolean | true
animation | 切换动效，目前只支持默认的横向和fade | String |
hoverStop | 只有当autoPlay时此属性才有用，当鼠标hover时是否停止自动播放 | Boolean | false
@beforeChange | 切换之前触发的事件 | Function | |
@afterChange | 切换之后触发的事件 | Function | |

### Carousel.Slide
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
