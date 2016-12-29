<template>
  <input :class="inputClassObj"
         :placeholder="placeholder"
         v-model="content"
         :valid-status="validStatus"
         :maxlength="maxlength" />
</template>
<script>
  export default {
    name: 'Input',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      error: Boolean,
      success: Boolean,
      warn: Boolean,
      large: Boolean,
      small: Boolean,
      value: [String, Number],
      maxlength: String,
      minlength: String,
      minlengthTips: String,
      // 验证状态，如不设置，会根据验证规则自动生成 success,error
      validStatus: {
        type: String,
        default: ''
      },
      // 验证规则
      rules: {
        type: Array,
        default: function () {
          return []
        }
      },
      rulesTips: {
        type: Array,
        default: function () {
          return []
        }
      },
      validResult: Object,
      // 兼容旧版本的错误提示配置
      tips: {
        type: String,
        default: ''
      },
      // 错误提示更名为errorTips
      errorTips: {
        type: String,
        default: ''
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },

    data () {
      let defaultErrorTips = this.errorTips || this.tips

      return {
        defaultErrorTips: defaultErrorTips,
        content: this.value
      }
    },

    computed: {
      inputClassObj () {
        let { prefixCls, large, small, error, success, warn, validStatus } = this
        let classObj = {}

        classObj[prefixCls + '-input'] = true
        classObj[prefixCls + '-input-large'] = large
        classObj[prefixCls + '-input-small'] = small
        classObj[prefixCls + '-input-error'] = (error || validStatus === 'error')
        classObj[prefixCls + '-input-success'] = (success || validStatus === 'success')
        classObj[prefixCls + '-input-warn'] = (warn || validStatus === 'warn')

        return classObj
      }
    },

    watch: {
      value (newVal, oldVal) {
        this.content = newVal
      },
      content (newVal, oldVal) {
        this.valid(newVal)
        this.$emit('input', newVal)
      }
    },

    methods: {
      setValidStatus () {
        let val = this.validResult
        let tips = ''
        let status = ''

        for (let key in val) {
          let obj = val[key]
          if (obj) {
            tips += obj.tips + '  '

            if (obj.validStatus !== 'success') {
              status = 'error'
            }
          }
        }

        if (this.defaultErrorTips === '') {
          // 兼容旧版本
          this.tips = tips.trim()
          this.errorTips = tips.trim()
        }

        this.validStatus = status
      },

      valid (val) {
        if (this.minlength) {
          this.minlengthValid(val)
        }

        if (this.rules) {
          this.rulesValid(val)
        }
      },

      /**
       * 规则验证
       */
      rulesValid (value) {
        let self = this

        self.rules.forEach((val, index) => {
          self.rulesItemValid(val, value, index)
        })
      },

      /**
       * 规则验证，枚举
       */
      rulesItemValid (rule, value, index) {
        let self = this

        // 正则验证
        if (rule.constructor && rule.constructor.name === 'RegExp') {
          self.regularValid(value, rule, index)
          return
        }

        switch (rule) {
          case 'required':
            self.requiredValid(value, index)
            break
          case 'notNull':
            self.requiredValid(value, index)
            break
          case 'isPhone':
            self.phoneValid(value, index)
            break
          case 'isNumber':
            self.numberValid(value, index)
            break
          case 'isTelephone':
            self.telValid(value, index)
            break
          case 'isEmail':
            self.emailValid(value, index)
            break
        }
      },

      /**
       * 非空验证
       */
      requiredValid (val, index) {
        let results = {}
        let tips = (index > -1) ? this.rulesTips[index] || this.errorTips || this.tips || '输入不能为空' : this.requiredTips || this.errorTips || this.tips || '输入不能为空'

        if (!val) {
          results.requiredValid = {
            validStatus: 'error',
            tips: tips
          }
        } else {
          results.requiredValid = {
            validStatus: 'success',
            tips: ''
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      },

      /**
       * 最小长度验证
       */
      minlengthValid (val) {
        let minlength = this.minlength - 0
        let results = {}
        let tips = this.minlengthTips || '输入字符数不能小于' + minlength

        if (val) {
          let len = val.length
          if (len < minlength) {
            results.minlengthValid = {
              validStatus: 'error',
              tips: tips
            }
          } else {
            results.minlengthValid = {
              validStatus: 'success',
              tips: ''
            }
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      },

      /**
       * 手机号码验证
       */
      phoneValid (value, index) {
        let rule = /^1\d{10}$/
        let results = {}
        let tips = (index > -1) ? this.rulesTips[index] || this.errorTips || this.tips || '输入手机号码格式错误' : '输入手机号码格式错误'

        if (rule.test(value) || value === '') {
          results.isPhoneValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          results.isPhoneValid = {
            validStatus: 'error',
            tips: tips
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      },

      /**
       * 数字验证
       */
      numberValid (value, index) {
        let rule = /^\d*$/
        let results = {}
        let tips = (index > -1) ? this.rulesTips[index] || this.errorTips || this.tips || '数字验证失败' : '数字验证失败'

        if (rule.test(value) || value === '') {
          results.isNumberValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          results.isNumberValid = {
            validStatus: 'error',
            tips: tips
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      },

      /**
       * 固话验证
       */
      telValid (value, index) {
        let rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
        let results = {}
        let tips = (index > -1) ? this.rulesTips[index] || this.errorTips || this.tips || '输入固话格式错误，固话请用-' : '输入固话格式错误，固话请用-'

        if (rule.test(value) || value === '') {
          results.isTelValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          results.isTelValid = {
            validStatus: 'error',
            tips: tips
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      },

      /**
       * 邮箱验证
       */
      emailValid (value, index) {
        let rule = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i
        let results = {}
        let tips = (index > -1) ? this.rulesTips[index] || this.errorTips || this.tips || '输入email格式错误' : '输入email格式错误'

        if (rule.test(value) || value === '') {
          results.isEmailValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          results.isEmailValid = {
            validStatus: 'error',
            tips: tips
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      },

      /**
       * 正则验证
       */
      regularValid (value, rule, index) {
        let results = {}
        let tips = this.rulesTips[index] || '第' + (index + 1) + '条正则规则验证失败'
        let reg = rule

        if (reg.test(value) || value === '') {
          results.regularValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          results.regularValid = {
            validStatus: 'error',
            tips: tips
          }
        }

        Object.assign(this.validResult, results)
        this.setValidStatus()
      }
    }
  }
</script>