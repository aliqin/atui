<template>
<div class="limitTextarea">
  <textarea class="textarea" maxlength="{{limitWords}}" placeholder="{{ placeholder }}" v-model="content" :class="{'error': overLimit}"></textarea>
  <p :class="{'words-error': overLimit}">{{ curWords }}/{{ limitWords }}</p>
</div>
</template>

<script>
  export default {
    props: ['limitWords','placeholder'],
    data () {
      return {
        curWords: 0,
        content: '',
        overLimit: false
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
  .limitTextarea {

    p {
      color: #999;
      font-size: 12px;
    }

    .words-error {
      color: #ff5959;
    }
  }
</style>
