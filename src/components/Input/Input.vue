<template>
  <input type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" v-model="value" :valid-status.sync="validStatus" maxlength="{{maxlength}}" />
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      large: null,
      small: null,
      value: [String, Number],
      //是否必填
      required: {
        type: Boolean,
        default: false
      },
      requiredTips: String,
      maxlength: String,
      minlength: String,
      minlengthTips: String,
      //验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
      validStatus: {
        type: String,
        default: ''
      },
      //验证规则
      rules: {
        type: Array
      },
      validResult: {
        type: Object,
        default() {
          return {
            requiredValid: {
              validStatus: 'success',
              tips:''
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
      }
    },

    data () {
      return {
        results: {
          requiredValid: {
            validStatus: 'success',
            tips:''
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
      classObj () {
        return {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined",
          'error': this.validStatus == 'error',
          'success': this.validStatus == 'success',
          'warn': this.validStatus == 'warn',
        }
      }
    },

    watch: {
      value (newVal, oldVal) {
        if(this.validResult) {
          this.valid(newVal)
        }
      },

      results: {
        handler: function (val, oldVal) {
          let self = this
          let tips = ''
          let status = ''
          for(let key in val) {
            let obj = val[key]
            if(obj) {
              tips += obj.tips + '  '

              if(obj.validStatus !== 'success') {
                status = 'error'
              }
            }
          }

          self.validStatus = status
          self.tips = tips
          self.validResult = self.results
        },
        deep: true
      }
    },

    methods: {
      valid (val) {
        if(typeof(this.required) !== "undefined") {
          this.requiredValid(val)
        }

        if(this.minlength) {
          this.minlengthValid(val)
        }

        if(this.rules) {
          this.rulesValid(val)
        }
      },

      rulesItemValid (rule, value) {
        let self = this

        switch(rule) {
          case 'required':
            self.requiredValid(value)
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

      requiredValid (val) {
        let self = this

        self.results = self.results || {}

        if(!val) {
          self.results.requiredValid = {
            validStatus: 'error',
            tips: self.requiredTips || '输入不能为空'
          }
        } else {
          self.results.requiredValid = {
            validStatus: 'success',
            tips: ''
          }
        }
      },

      minlengthValid (val) {
        let self = this
        let minlength = self.minlength - 0

        self.results = self.results || {}

        if(val) {
          let  len = val.length

          if(val.length < minlength) {
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

      rulesValid (value) {
        let self = this

        self.rules.forEach((val, index) => {
          self.rulesItemValid(val, value)
        })
      },

      phoneValid (value) {
        let rule = /^1\d{10}$/

        if (rule.test(value) || value == '') {
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

      numberValid (value) {
        let rule = /^\d*$/

        if(rule.test(value) || value == '') {
          this.results.isNumberValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isNumberValid = {
            validStatus: 'error',
            tips: this.isPhoneValidTips || '数字验证失败'
          }
        }
      },

      telValid (value) {
        let rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/

        if(rule.test(value) || value == '') {
          this.results.isTelValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isTelValid = {
            validStatus: 'error',
            tips: this.isPhoneValidTips || '输入固话格式错误，固话请用-'
          }
        }
      },

      emailValid (value) {
        let rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

        if(rule.test(value) || value == '') {
          this.results.isEmailValid = {
            validStatus: 'success',
            tips: ''
          }
        } else {
          this.results.isEmailValid = {
            validStatus: 'error',
            tips: this.isPhoneValidTips || '输入email格式错误'
          }
        }
      }
    }
  }
</script>
