<template>
<div class="limitTextarea">
  <div v-if="limitWords" class="limit-textarea ">
    <textarea v-if="isDisabled" disabled class="textarea" maxlength="{{limitWords}}" placeholder="{{placeholder}}" v-model="content" :class="classObj"></textarea>
    <textarea v-else class="textarea" maxlength="{{limitWords}}" placeholder="{{placeholder}}" v-model="content" :class="classObj"></textarea>
    <p :class="{'words-error': overLimit}">{{ curWords }}/{{ limitWords }}</p>
  </div>
  <template v-else>
    <textarea v-if="isDisabled" disabled class="textarea" :class="classObj" placeholder="{{placeholder}}" v-model="content"></textarea>
    <textarea v-else class="textarea" :class="classObj" placeholder="{{placeholder}}" v-model="content"></textarea>
  </template>
</div>
</template>

<script>
  export default {
    props: {
      limitWords: Number,
      placeholder: String,
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

<style lang="less">
  @import "../../styles/textarea.less";
</style>
