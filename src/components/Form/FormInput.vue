<template>
  <textarea v-if="type=='textarea'"></textarea>
  <input v-else :type="type"
  :value="defaultValue"
  :placeholder="placeholder"
  :class="[defaultClass,validStatus]" />
  <div v-if="validStatus" class="status-info {{validStatus}}">{{ tip }}</div>
</template>
<style lang="less">
.status-info {

}
</style>
<script>
  export default {
    props: {
      label: String,
      id: String,
      // 是否必填
      required: {
        type: Boolean,
        default: false
      },
      // 提示信息，如不设置，会根据验证规则自动生成
      tip: String,
      // 验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
      validStatus: {
        type: String,
        default: ''
      },
      // 配合validateStatus属性使用，是否展示校验状态图标
      hasFeedback: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      defaultClass () {
        let type = this.type
        if (type === 'textarea') {
          return 'textarea'
        } else if (type === 'radio' || type === 'checkbox') {
          return ''
        } else if (type !== 'select') {
          return 'input'
        }
      }
    }
  }
</script>
