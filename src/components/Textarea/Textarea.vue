<template>
<div class="at-textarea">
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
      content: String,
      wordsCount: Boolean,
      countTips: {
        type: String,
        default: '输入字数：'
      }
    },
    data () {
      return {
        overLimit: false,
        isDisabled: this.disabled === true || this.disabled === ''
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
          'success': this.success === true || this.success === ''
        }
      },

      wordClass () {
        return {
          'words-error': this.error || this.error === '' || this.overLimit
        }
      }
    },
    watch: {
      'content' (newVal, oldVal) {
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
