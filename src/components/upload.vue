<template>
<div class="upload-file">
  <span class="upload-btn">
    <input v-if="isMultiple" type="file" multiple="multiple" accept="fileType" v-model="filePath" />
    <input v-else type="file" accept="fileType" v-model="filePath" />
    <button class="btn tertiary small">点击上传</button>
  </span>
  <div class="upload-rate">
    <spam class="rate-control">
      <span class="rate"></span>
      <span class="rate-tip">上传中...50%</span>
    </spam>
    <span class="cancel-upload">取消</span>
  </div>
</div>


</template>
<style lang="less">
  .upload-file {
    .upload-btn {
      position: relative;

      input[type="file"] {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
    }

    .upload-rate {
      .rate-control {
        position: relative;
        display: inline-block;
        width: 90px;
        height: 22px;
        background-color: #f2f2f2;
        border-radius: 4px;
        overflow: hidden;
      }

      .rate {
        display: inline-block;
        width: 0;
        height: 22px;
        background-color: #d9d9d9;
        border-radius: 4px 0 0 4px;

        &.active {
          width: 90px;
          transition-property: width;
          transition-duration: 10s;
        }
      }

      .rate-tip {
        position: absolute;
        left: 0;
        top: 0;
        display: inline-block;
        width: 90px;
        height: 22px;
        line-height: 22px;
        color: #666;
        font-size: 12px;
        text-align: center;
        overflow: hidden;
      }
    }
  }
</style>
<script>
  export default {
    props: {
      id: String,
      uploadTime: {
        type: Number,
        default: 0
      },
      fileType: {
        type: String,
        default: 'all'
      },
      isMultiple: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        filePath: '',
        rate: 0
      }
    },
    watch: {
      uploadTime (newVal, oldVal) {
        if(+newVal > 0) {
          this.showRate(+newVal);
        }
      },
      filePath (newVal, oldVal) {
        alert(newVal);
      }
    },
    methods: {
      showRate (time) {

      }
    }
  }
</script>
