<template>
<v-col :span="itemCol" :class="formItemClassObj">
  <v-col :span="labelCol" type="sm">
    <label v-if="label" :class="[prefixCls + '-form-label']">
      <span v-if="isRequired" :class="[prefixCls + '-form-required-icon']">*</span>
      {{label}}
    </label>
  </v-col>
  <v-col :span="wrapperCol || calcWrapperCol" type="sm">
    <template v-if="tipsMode === 'popup'">
      <popover effect="fade" :content="popupTips" placement="right" :always-show="true">
        <div :class="[prefixCls + '-form-input']">
          <slot></slot>
          <template v-if="showIcon">
            <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'warn'" type="waring"></icon>
            <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'error'" type="error"></icon>
            <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'success'" type="success"></icon>
            <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'help'" type="help"></icon>
          </template>
        </div>
      </popover>
    </template>

    <template v-if="tipsMode === 'text'">
      <div :class="[prefixCls + '-form-input']">
        <slot></slot>
        <template v-if="showIcon">
          <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'warn'" type="waring"></icon>
          <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'error'" type="error"></icon>
          <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'success'" type="success"></icon>
          <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'help'" type="help"></icon>
        </template>
      </div>
      <div v-if="tips && validStatus" :class="[prefixCls + '-form-status-info']">{{tips}}</div>
    </template>

  </v-col>
</v-col>
</template>
<script>
  import Layout from '../Layout/'
  import Icon from '../Icon/'
  import Popover from '../Popover/'

  const vCol = Layout.Col

  export default {
    props: {
      label: String,
      itemCol: {
        type: String,
        default: '24'
      },
      labelCol: {
        type: String,
        default: '7'
      },
      wrapperCol: {
        type: String,
        default: ''
      },
      // 是否必填
      required: Boolean,
      // 提示信息
      tips: {
        type: String,
        default: ''
      },
      // 验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
      validStatus: {
        type: String,
        default: ''
      },
      // 配合validateStatus属性使用，是否展示校验状态图标
      hasIcon: Boolean,
      prefixCls: {
        type: String,
        default: 'atui'
      },
      // 提示展示类型，默认(text)提示文案显示在输入域的下方，泡泡(popup)提示文案显示在输入域的右侧
      tipsMode: {
        type: String,
        default: 'text'
      },
      // 输入描述，用于popup模式下
      description: {
        type: String
      }
    },

    computed: {
      formItemClassObj () {
        let { prefixCls, validStatus } = this
        let classObj = {}

        classObj[prefixCls + '-form-item'] = true
        classObj[prefixCls + '-form-with-help'] = validStatus
        classObj[prefixCls + '-form-has-error'] = validStatus === 'error'
        classObj[prefixCls + '-form-has-success'] = validStatus === 'success'

        return classObj
      },
      isRequired () {
        return !!this.required
      },
      showIcon () {
        return this.validStatus && !!this.hasIcon
      },
      calcWrapperCol () {
        var span = 24 - parseInt(this.labelCol)
        return span.toString()
      },
      popupTips () {
        if (this.validStatus === 'error') {
          return this.tips
        }

        return this.description
      }
    },
    components: {
      vCol,
      Icon,
      Popover
    }
  }
</script>
