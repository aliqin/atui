<template>
<v-row>
  <div class="form-item" :class="classObj">
    <v-col :span="labelCol" class="form-label">
      <label v-if="label">
        <span v-if="isRequired" class="required-icon">*</span>
        {{label}}
      </label>
    </v-col>
    <v-col :span="wrapperCol">
      <div class="form-input">
        <slot></slot>
        <i v-if="showIcon" class="iconfont status-icon">&#xe600;</i>
      </div>
      <div v-if="tip" class="status-info">{{tip}}</div>
    </v-col>
  </div>
</v-row>
</template>
<script>

  import Layout from 'src/components/Layout/';
  const vRow = Layout.Row;
  const vCol = Layout.Col;
  export default {
    props: {
      label: String,
      labelCol: {
        type: String,
        default: '7'
      },
      //验证规则
      rules: {
        type: Array,
        default: []
      },
      //是否必填
      required: null,
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
      hasIcon: null
    },

    data () {
      return {
        classObj: {
          'form-item-with-help': this.validStatus,
          'has-error': this.validStatus == 'error',
          'has-success': this.validStatus == 'success'
        },
        isRequired: typeof(this.required) !== 'undefined',
        showIcon: typeof(this.hasIcon) !== 'undefined'
      }
    },

    computed: {
      wrapperCol() {
        var span = new Number(24 - this.labelCol);
        return span.toString();
      }
    },
    components: {
      vRow,
      vCol
    }
  }
</script>
