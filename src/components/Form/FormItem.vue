<template>
<div class="form-item" :class="classObj">
  <v-col :span="labelCol">
    <label v-if="label" class="form-label">
      <span v-if="isRequired" class="required-icon">*</span>
      {{label}}
    </label>
  </v-col>
  <v-col :span="wrapperCol || calcWrapperCol">
    <div class="form-input">
      <slot></slot>
      <template v-if="showIcon">
        <icon class="status-icon" v-if="validStatus == 'warn'" type="waring"></icon>
        <icon class="status-icon" v-if="validStatus == 'error'" type="error"></icon>
        <icon class="status-icon" v-if="validStatus == 'success'" type="success"></icon>
        <icon class="status-icon" v-if="validStatus == 'help'" type="help"></icon>
      </template>
    </div>
    <div v-if="tips && validStatus" class="status-info">{{tips}}</div>
  </v-col>
</div>
</template>
<script>
  import Layout from 'src/components/Layout/';
  import Icon from 'src/components/Icon/';
  const vCol = Layout.Col;
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
      //是否必填
      required: null,
      //提示信息，如不设置，会根据验证规则自动生成
      tips: {
        type: String,
        default: ''
      },
      //验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
      validStatus: {
        type: String,
        default: ''
      },
      //配合validateStatus属性使用，是否展示校验状态图标
      hasIcon: null
    },

    computed: {
      classObj () {
        let obj = {
          'form-item-with-help': this.validStatus,
          'has-error': this.validStatus == 'error',
          'has-success': this.validStatus == 'success'
        };

        obj['col-lg-'+this.itemCol] = true;

        return obj;
      },
      isRequired () {
        return typeof(this.required) !== 'undefined';
      },
      showIcon () {
        return this.validStatus && typeof(this.hasIcon) !== 'undefined';
      },
      calcWrapperCol() {
        var span = new Number(24 - this.labelCol);
        return span.toString();
      }
    },

    components: {
      vCol,
      Icon
    }
  }
</script>
