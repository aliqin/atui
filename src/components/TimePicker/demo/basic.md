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
<time-picker @change="timePickerChange" value="10:00:00"></time-picker>
<time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        timePicker: atui.TimePicker
    },
    data: function() {
        return {
            
        }
    },
    methods: {
        disabledMinutes: function() {
            return [...Array(60).keys()].filter(value => value % 10 !== 0)
        },
        disabledSeconds: function() {
            return [...Array(60).keys()].filter(value => value % 30 !== 0)
        },
        timePickerChange: function(date,timeString) {
            console.log('timepicker',date, timeString)
        }
    }
})
````