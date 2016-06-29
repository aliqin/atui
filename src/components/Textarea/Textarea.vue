<template>
<div class="at-textarea">
  <template v-if="autosize">
    <pre :id="preId"><span>{{content}}</span><br></pre>
  </template>
  <textarea v-bind="{disabled: isDisabled}" :maxlength="limitWords" class="textarea" :class="classObj" :name="name" :placeholder="placeholder" v-model="content"></textarea>
  <p v-if="limitWords" class="words-area" :class="wordClass">{{ curWords }}/{{ limitWords }}</p>
  <p v-if="showWordsCount" class="words-area">{{ countTips }}{{ curWords }}</p>
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
      minRows: [String, Number]
    },
    data () {
      return {
        overLimit: false,
        isDisabled: this.disabled === true || this.disabled === '',
        preId: 'pre' + (new Date()).getTime()
      }
    },
    computed: {
      showWordsCount () {
        return this.wordsCount === true || this.wordsCount === 'true' || this.wordsCount === ''
      },

      curWords () {
        if (this.content) {
          return this.content.length
        }
        return 0
      },

      classObj () {
        return {
          'error': this.error || this.error === '' || this.overLimit,
          'success': this.success === true || this.success === '',
          'autosize': this.autosize
        }
      },

      wordClass () {
        return {
          'words-error': this.error || this.error === '' || this.overLimit
        }
      }
    },
    ready () {
      if (this.maxRows || this.minRows) {
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
