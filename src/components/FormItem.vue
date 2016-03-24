<template>
<div class="form-item">
  <label for="{{id}}"></label>
  <solt></solt>
</div>
</template>
<style>

</style>
<script>
  export default {
    props: {
      label: String,
      id: String,
      //验证规则
      rules: {
        type: Array,
        default: []
      },
      //是否必填
      required: {
        type: Boolean,
        default: false
      },
      //提示信息，如不设置，会根据验证规则自动生成
      tip: String,
      //额外提示信息，设置后，会和提示信息一起显示
      extra: String,
      //验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
      validStatus: {
        type: String,
        default: ''
      },
      //配合validateStatus属性使用，是否展示校验状态图标
      hasFeedback: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
