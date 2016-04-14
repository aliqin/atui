<template>
<textarea v-bind="{disabled: isDisabled}" maxlength="{{limitWords}}" class="textarea" :class="classObj" name="{{name}}" placeholder="{{placeholder}}" v-model="content"></textarea>
<p v-if="limitWords" class="limit-word-area" :class="wordClass">{{ curWords }}/{{ limitWords }}</p>
</template>

<script>
  export default {
    props: {
      limitWords: Number,
      placeholder: String,
      name: String,
      disabled: null,
      error: null,
      success: null,
      content: String
    },
    data () {
      return {
        content: '',
        overLimit: false,
        isDisabled: this.disabled == true || this.disabled === ''
      }
    },
    computed: {
      curWords () {
        if (this.content) {
          return this.content.length;
        }

        return 0;
      },

      classObj () {
        return {
          'error': this.error || this.error === '' || this.overLimit,
          'success': this.success == true || this.success === ''
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
        let len = newVal.length;
        this.curWords = len;
        if(len >= this.limitWords - 0) {
          this.overLimit = true;
        } else {
          this.overLimit = false;
        }
      }
    }
  }
</script>
