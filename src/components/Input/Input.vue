<template>
  <input :class="inputClassObj"
         :placeholder="placeholder"
         v-model="value"
         :valid-status.sync="validStatus"
         :maxlength="maxlength" />
</template>
<script>
  export default {
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
      // 是否必填
      required: {
        type: Boolean,
        default: false
      },
      requiredTips: String,
      maxlength: String,
      minlength: String,
      minlengthTips: String,
      // 验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
      validStatus: {
        type: String,
        default: ''
      },
      // 验证规则
      rules: {
        type: Array
      },
      rulesTips: {
        type: Array
      },
      validResult: {
        type: Object,
        default () {
          return {
            requiredValid: {
              validStatus: 'success',
              tips: ''
            },
            minlengthValid: {
              validStatus: 'success',
              tips: ''
            },
            isNumberValid: {
              validStatus: 'success',
              tips: ''
            },
            isTelValid: {
              validStatus: 'success',
              tips: ''
            },
            isEmailValid: {
              validStatus: 'success',
              tips: ''
            }
          }
        }
      },
      tips: {
        type: String,
        default: ''
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },

    data () {
      return {
        defaultErrorTips: this.tips,
        results: {
          requiredValid: {
            validStatus: 'success',
            tips: ''
          },
          minlengthValid: {
            validStatus: 'success',
            tips: ''
          },
          isPhoneValid: {
            validStatus: 'success',
            tips: ''
          },
          isNumberValid: {
            validStatus: 'success',
            tips: ''
          },
          isTelValid: {
            validStatus: 'success',
            tips: ''
          },
          isEmailValid: {
            validStatus: 'success',
            tips: ''
          }
        }
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
        if (this.validResult) {
          this.valid(newVal)
        }
      },

      results: {
        handler (val, oldVal) {
          let self = this
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

          if (this.defaultErrorTips == '') {
            self.tips = tips
          }

          self.validStatus = status
          self.validResult = self.results
        },
        deep: true
      }
    },

    methods: {
      valid (val) {
        if (this.required) {
          this.requiredValid(val)
        }

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
        if (rule.indexOf('/') !== rule.lastIndexOf('/')) {
          self.regularValid(value, rule, index)
          return
        }

        switch (rule) {
          case 'required':
            self.requiredValid(value, index)
            break
          case 'isPhone':
            self.phoneValid(value)
            break
          case 'isNumber':
            self.numberValid(value)
            break
          case 'isTelephone':
            self.telValid(value)
            break
          case 'isEmail':
            self.emailValid(value)
            break
        }
      },

      /**
       * 非空验证
       */
      requiredValid (val, index) {
        let self = this

        self.results = self.results || {}

        if (!val) {
          let tips = (index > -1) ? this.rulesTips[index] || '输入不能为空' : self.requiredTips || '输入不能为空'

          self.results.requiredValid = {
            validStatus: 'error',
            tips: tips
          }
        } else {
          self.results.requiredValid = {
            validStatus: 'success',
            tips: ''
          }
        }
      },

      /**
       * 最小长度验证
       */
      minlengthValid (val) {
        let self = this
        let minlength = self.minlength - 0

        self.results = self.results || {}

        if (val) {
          let len = val.length

          if (val.length < minlength) {
            self.results.minlengthValid = {
              validStatus: 'error',
              tips: self.minlengthTips || '输入字符数不能小于' + len
            }
          } else {
            self.results.minlengthValid = {
              validStatus: 'success',
              tips: ''
            }
          }
        }
      },

      /**
       * 手机号码验证
       */
      phoneValid (value) {
        let rule = /^1\d{10}$/

        if (rule.test(value) || value === '') {
          this.results.isPhoneValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isPhoneValid = {
            validStatus: 'error',
            tips: this.isPhoneValidTips || '输入手机号码格式错误'
          }
        }
      },

      /**
       * 数字验证
       */
      numberValid (value) {
        let rule = /^\d*$/

        if (rule.test(value) || value === '') {
          this.results.isNumberValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isNumberValid = {
            validStatus: 'error',
            tips: this.isNumberValidTips || '数字验证失败'
          }
        }
      },

      /**
       * 固话验证
       */
      telValid (value) {
        let rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/

        if (rule.test(value) || value === '') {
          this.results.isTelValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isTelValid = {
            validStatus: 'error',
            tips: this.isTelValidTips || '输入固话格式错误，固话请用-'
          }
        }
      },

      /**
       * 邮箱验证
       */
      emailValid (value) {
        let rule = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i

        if (rule.test(value) || value === '') {
          this.results.isEmailValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isEmailValid = {
            validStatus: 'error',
            tips: this.isEmailValidTips || '输入email格式错误'
          }
        }
      },

      /**
       * 正则验证
       */
      regularValid (value, rule, index) {
        if (new RegExp(rule).test(value)) {
          this.results.regularValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.regularValid = {
            validStatus: 'error',
            tips: this.rulesTips[index] || '第' + (index + 1) + '条正则规则验证失败'
          }
        }
      }
    }
  }
</script>
