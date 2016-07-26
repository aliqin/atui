---
category: Components
type: Views
title: Badge
subtitle: 徽标数
---

按钮用于开始一个即时操作。

## 何时使用


## API


按钮的属性说明如下：


| 参数           | 说明                             | 类型       |  可选值 | 默认值 |
|----------------|----------------------------------|------------|---------|--------|
| count          | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | Number     |         |        |
| overflowCount  | 展示封顶的数字值                 | Number     |         | 99     |
| dot            | 不展示数字，只有一个小红点       | boolean    |         | false  |


<style>
  .badge-count-example, .badge-dot-example {
    width: 42px;
    height: 42px;
    background-color: #eee;
    display: inline-block;
    border-radius: 6px;
  }
  .example-title {
    margin: 20px 0;
  }
</style>
