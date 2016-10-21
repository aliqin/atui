<template>
<div :class="[prefixCls + '-textarea-box']">
  <template v-if="autosize">
    <pre :id="preId"><span>{{content}}</span><br></pre>
  </template>
  <textarea v-bind="{disabled: isDisabled}"
            :maxlength="limitWords"
            :class="textareaClassObj"
            :name="name"
            :placeholder="placeholder"
            v-model="content"></textarea>
  <p v-if="limitWords"
     :class="wordClassObj">{{ curWords }}/{{ limitWords }}</p>
  <p v-if="wordsCount"
     :class="[prefixCls + '-textarea-words-area']">{{ countTips }}{{ curWords }}</p>
</div>
</template>

<script>
  export default {
    props: {
      limitWords: Number,
      placeholder: String,
      name: String,
      disabled: Boolean,
      error: Boolean,
      success: Boolean,
      content: {
        type: String,
        default: ''
      },
      wordsCount: Boolean,
      countTips: {
        type: String,
        default: '输入字数：'
      },
      autosize: Boolean,
      maxRows: [String, Number],
      minRows: [String, Number],
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    data () {
      return {
        overLimit: false,
        isDisabled: this.disabled === true || this.disabled === '',
        preId: 'pre' + (new Date()).getTime()
      }
    },
    computed: {
      curWords () {
        if (this.content) {
          return this.content.length
        }
        return 0
      },

      textareaClassObj () {
        let { prefixCls, success, error, autosize, overLimit } = this
        let classObj = {}

        classObj[prefixCls + '-textarea'] = true
        classObj[prefixCls + '-textarea-success'] = (success === true || success === '')
        classObj[prefixCls + '-textarea-error'] = (error || error === '' || overLimit)
        classObj[prefixCls + '-textarea-autosize'] = autosize

        return classObj
      },

      wordClassObj () {
        let { prefixCls, error, overLimit } = this
        let classObj = {}

        classObj[prefixCls + '-words-area'] = true
        classObj[prefixCls + '-words-error'] = (error || error === '' || overLimit)

        return classObj
      }
    },
    ready () {
      if (this.autosize && (this.maxRows || this.minRows)) {
        let self = this
        setTimeout(function () {
          let ele = document.getElementById(self.preId)
          let style = window.getComputedStyle ? window.getComputedStyle(ele, '') : ele.currentStyle
          let borderTopWidth = style.borderTopWidth.replace('px', '') - 0
          let borderBottomWidth = style.borderBottomWidth.replace('px', '') - 0
          let paddingTop = style.paddingTop.replace('px', '') - 0
          let paddingBottom = style.paddingBottom.replace('px', '') - 0
          let lineHeight = style.lineHeight.replace('px', '') - 0
          if (self.maxRows) {
            ele.style.maxHeight = self.maxRows * lineHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom + 'px'
          }

          if (self.minRows) {
            ele.style.minHeight = self.minRows * lineHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom + 'px'
          }
        }, 0)
      }
    },
    watch: {
      content (newVal, oldVal) {
        let len = newVal.length
        this.curWords = len
        if (len >= this.limitWords - 0) {
          this.overLimit = true
        } else {
          this.overLimit = false
        }
      }
    }
  }
</script>
