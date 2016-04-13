<template>
<textarea v-bind="{disabled: isDisabled}" maxlength="{{limitWords}}" class="textarea" :class="classObj" name="{{name}}" placeholder="{{placeholder}}" v-model="content"></textarea>
<p v-if="limitWords" class="limit-word-area" :class="{'words-error': overLimit}">{{ curWords }}/{{ limitWords }}</p>
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
        curWords: 0,
        content: '',
        overLimit: false,
        isDisabled: typeof(this.disabled) !== 'undefined'
      }
    },
    computed: {
      classObj () {
        return {
          'error': typeof(this.error) !== 'undefined' || this.overLimit,
          'success': typeof(this.success) !== 'undefined'
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
