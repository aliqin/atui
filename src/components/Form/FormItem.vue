<template>
<div class="form-item row" :class="{'form-item-with-help': validStatus}">
  <label v-if="label" class="col-lg-{{labelCol}}">{{label}}</label>
  <div class="col-lg-{{wrapperCol}}">
    <solt></solt>
  </div>
</div>
</template>
<style lang="less">
.form-item {
  position: relative;
  margin-bottom: 24px;
  color: #666;

  &.form-item-with-help {
    margin-bottom: 6px;
  }

  label {
    padding: 7px 0;
    text-align: right;
    vertical-align: middle;
  }
}
</style>
<script>
  export default {
    props: {
      label: String,
      labelCol: {
        type: Number,
        default: 7
      },
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
    },
    computed: {
      wrapperCol() {
        return 24 - this.labelCol;
      }
    }
  }
</script>
