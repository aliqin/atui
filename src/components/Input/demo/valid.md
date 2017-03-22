---
order: 0
title:
  zh-CN: 规则验证，使用默认错误提示
  en-US: Type
---

## zh-CN

## en-US
````jsx
<h3>手机号校验：</h3>
<p>校验结果：{{phoneValidResult.isPhoneValid.tips}}</p>
<div>
  <v-input id="phone" type="text" placeholder="请输入手机号码" :rules="phoneValidRule" :valid-result="phoneValidResult"></v-input>
</div>
<br>
<h3>非空校验</h3>
<p>校验结果：{{notNullValidResult.requiredValid.tips}}</p>
<div>
  <v-input type="text" placeholder="请输入内容" :rules="notNullValidRule" :valid-result="notNullValidResult" :tips="notNullTips"></v-input>
</div>
<br>
<h3>数字校验</h3>
<p>校验结果：{{isNumberValidResult.isNumberValid.tips}}</p>
<div>
  <v-input type="text" placeholder="请输入数字" :rules="isNumberValidRule" :valid-result="isNumberValidResult"></v-input>
</div>
<br>
<h3>固话校验</h3>
<p>校验结果：{{isTelValidResult.isTelValid.tips}}</p>
<div>
  <v-input type="text" placeholder="请输入固话号码" :rules="isTelValidRule" :valid-result="isTelValidResult"></v-input>
</div>
<br>
<h3>邮箱校验</h3>
<p>校验结果：{{isEmailValidResult.isEmailValid.tips}}</p>
<div>
  <v-input type="text" placeholder="请输入邮箱" :rules="isEmailValidRule" :valid-result="isEmailValidResult"></v-input>
</div>
<br>
<h3>最小长度校验</h3>
<p>校验结果：{{minlengthValidResult.minlengthValid.tips}}</p>
<div>
  <v-input type="text" placeholder="最小长度是5" minlength-tips="请输入至少5个字符" minlength="5" :valid-result="minlengthValidResult"></v-input>
</div>
<br>
<h3>自定义正则校验</h3>
<p>校验结果：{{validResult.regularValid.tips}}</p>
<div>
  <v-input type="text" placeholder="自定义正则校验内容" :rules="rules" :valid-result="validResult"></v-input>
</div>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vInput: atui.Input
  },
  data () {
    return {
      phoneValidRule: ['isPhone'],
      phoneValidResult: {
        isPhoneValid: {
          validStatus: '',
          tips: ''
        }
      },
      phoneTips: '什么手机号？',
      notNullValidRule: ['notNull'],
      notNullValidResult: {
        requiredValid: {
          validStatus: '',
          tips: ''
        }
      },
      notNullTips: '',
      isNumberValidRule: ['isNumber'],
      isNumberValidResult: {
        isNumberValid: {
          validStatus: '',
          tip: ''
        }
      },
      isTelValidRule: ['isTelephone'],
      isTelValidResult: {
        isTelValid: {
          validStatus: '',
          tip: ''
        }
      },
      isEmailValidRule: ['isEmail'],
      isEmailValidResult: {
        isEmailValid: {
          validStatus: '',
          tip: ''
        }
      },
      minlengthValidResult: {
        minlengthValid: {
          validStatus: '',
          tip: ''
        }
      },
      rules: [/^[a-zA-Z]+$/],
      validResult: {
        regularValid: {
          validStatus: '',
          tip: ''
        }
      }
    }
  }
})
````
