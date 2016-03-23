<template>
<div class="file-upload">
  <div class="click-upload" v-if="uploadType == 'click'">
    <div>
      <input
        type="file"
        name="files[]"
        id="{{id}}"
        accept="accept"
        v-bind:multiple="multiple"
        v-on:change="onChange($event)" />
      <label for="{{id}}">
        <span class="btn tertiary small">点击上传</span>
      </label>
    </div>
    <div class="select-files" v-if="fileList.length > 0">
      <a class="file-item" href="javascript:;" v-for="file in selectFiles">
        <span>{{file}}</span>
      </a>
    </div>
    <button type="submit" class="btn" v-if="!hideButton && !autoSubmit" v-on:click.prevent="submitForm($event)">Upload</button>
    <div class="state">
      <div class="upload-rate" v-show="state == 'uploading'">
        <span class="rate-control">
          <span class="rate" :style="{'width': +progress * 0.9 + 'px'}"></span>
          <span class="rate-tip">
            {{text.uploading}}
            <span v-if="advancedUpload">{{progress}}</span>
          </span>
        </span>
        <a class="cancel-upload" href="javascript:;">取消</a>
      </div>
      <div class="upload-rate" v-show="state == 'success'">
        <span class="rate-control">
          <span class="rate" :style="{'width': '90px'}"></span>
          <span class="rate-tip">上传成功</span>
        </span>
        <a class="continu-upload" @click.prevent="restart" href="javascript:;">继续上传？</a>
      </div>
      <div class="upload-rate" v-show="state == 'error'">
        <span>出错了！{{errorMessage}}</span>
        <a class="continu-upload" @click.prevent="retry" href="javascript:;">请重试</a>
      </div>
    </div>
  </div>
  <div v-if="uploadType == 'drag'" class="drag-upload {{advancedUpload ? 'active' : ''}} {{dragover ? 'is-dragover' : ''}}">
      <div v-if="state == null || state == 'retry'">
        <input
            type="file"
            name="files[]"
            id="{{id}}"
            accept="accept"
            v-bind:multiple="multiple && advancedUpload"
            v-on:change="onChange($event)" />
        <label for="{{id}}">
          <span v-if="fileList.length == 0 && advancedUpload">将文件拖拽至框中上传或点此上传</span>
          <p v-if="fileList.length > 0" v-for="file in selectFiles">{{file}}</p>
        </label>
        <br>
        <button type="submit" class="btn" v-if="!hideButton && !autoSubmit" v-on:click.prevent="submitForm($event)">Upload</button>
      </div>
      <div class="state" v-if="state != null">
        <span class="state-uploading animate" v-show="state == 'uploading'">
          {{text.uploading}}
          <span v-if="advancedUpload">{{progress}}</span>
        </span>
        <span class="state-success animate" v-show="state == 'success'">
          上传成功
          <a href="#" v-on:click.prevent="restart" role="button" v-show="multiple">继续上传?</a>
        </span>
        <span class="state-error animate" v-show="state == 'error'">
          出错了!
          <span>{{errorMessage}}</span>
          <a href="#" v-on:click.prevent="retry">请重试</a>
        </span>
      </div>
  </div>
</div>

</template>
<style lang="less">

@keyframes appear-from-inside
{
    from    { transform: scale( 0 ); }
    75%     { transform: scale( 1.1 ); }
    to      { transform: scale( 1 ); }
}

.file-upload {

  .select-files {
    width: 227px;

    .file-item {
      display: block;
      position: relative;
      width: 227px;
      height: 30px;
      line-height: 30px;
      padding: 0 30px;
      text-align: left;
      border-radius: 4px;

      &:hover {
        background-color: #F2FAFF;
        text-decoration: none;
      }

      span {
        color: #00A0FF;
      }
    }
  }

  input[type="file"] {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    z-index: -1;

    + label {
      display: inline-block;
      max-width: 80%;
      white-space: nowrap;
      cursor: pointer;
      overflow: hidden;

      &:hover, &:focus {
          color: #39bfd3;
      }
    }

    &:focus + label, &.has-focus + label {
        outline: 1px dotted #000;
        outline: -webkit-focus-ring-color auto 5px;
    }
  }

  .drag-upload {
    position: relative;
    background-color: #c8dadf;
    padding: 100px 20px;
    text-align: center;

    &.active {
      outline: 2px dashed #92b0b3;
      outline-offset: -10px;
      transition: outline-offset .15s ease-in-out, background-color .15s linear;
    }
    .state {
      .state-uploading {
        font-style: italic;
      }
    }

    .animate  {
      animation: appear-from-inside .25s ease-in-out;
    }

    &.is-dragover {
        outline-offset: -20px;
        outline-color: #c8dadf;
        background-color: #fff;
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
      transition-property: width;

      &.active {
        width: 90px;
        transition-property: width;
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

    a {
      color: #00A0FF;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
<script>
  export default {
    props: {
      id: {
        type: String,
        default: '',
      },
      uploadType: {
        type: String,
        default: 'click' //drag拖拽上传，click点击上传
      },
      accept: {
        type: String,
        default: '',
      },
      ajax: {
        type: String,
        default: '',
      },
      autoSubmit: {
        type: Boolean,
        default: false,
      },
      formId: {
        type: String,
        default: '',
      },
      method: {
        type: String,
        default: 'POST',
      },
      name: {
        type: String,
        default: 'files',
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      fileList: {
        default: null,
      },
      hideButton: {
        type: Boolean,
        default: false,
      },
      text: {
        type: Object,
        default() {
          return {
            uploading: '上传中...',
            retry: '请重试',
          }
        }
      }
    },
    data () {
      return {
        state: null,
        dragover: false,
        progress: '0%',
        errorMessage: '',
        model: null
      }
    },
    computed: {
      advancedUpload() {
        const div = document.createElement('div');
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
      },
      //上传文件名称
      selectFiles() {
        let result = [];
        let len    = this.fileList.length;
        // this.fileList.forEach(function(val, key) {
        //   result.push(val.name);
        // });
        for(let i = 0; i < len; i++) {
          result.push(this.fileList[i].name);
        }

        return result;
      }
    },
    // events: {
    //   'submit::file-upload'(id) {
    //     if (this.id === id) {
    //       this.submitForm()
    //     }
    //   }
    // },
    ready() {
      this._input = this.$el.querySelector('input');

      if(this.advancedUpload) {
        this.addDragEvt();
      } else {
        if (!this.formId) {
          throw "You need to wrap this component in a form and specify it's id in a 'form-id' attribute."
        }
        this._wrappingForm = document.getElementById(this.formId);
      }
    },
    beforeDestroy() {
      const events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
      events.forEach((event) => {
        this.$el.removeEventListener(event, () => this._eventHandler());
      })
    },
    methods: {
      /**
       * 添加drag事件
       */
      addDragEvt () {
        let events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];

        events.forEach((event) => {
          this.$el.addEventListener(event, (e) => this._eventHandler(e))
        });

        events = ['dragover', 'dragenter'];
        events.forEach((event) => (e) => this._eventHandler(e));

        events = ['dragend', 'dragleave', 'drop'];
        events.forEach((event) => {
          this.$el.addEventListener(event, (e) => this._eventHandler(e))
        });
      },
      /**
       * drag事件处理
       */
      _eventHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragover' || e.type === 'dragenter') {
          this.dragover = true;
        }

        if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
          this.dragover = false;
          if (e.type === 'drop') {
            this.fileList = e.dataTransfer.files;
            if (this.autoSubmit) {
              this.submitForm();
            }
          }
        }
      },
      /**
       * 上传后自动提交
       */
      submitForm() {
        if (!this.fileList.length) return;

        if (this.ajax) {
          this.state = 'uploading'
          if (this.advancedUpload) {
            this.xhrUpload();
          } else {
            this.iframeUpload();
          }
        }
      },
      xhrUpload() {
        const ajaxData = new FormData()
        for (let i = 0; i < this.fileList.length; i++) {
          const file = this.fileList[i];

          if (this.accept && !file.type.match(this.accept)) {
            continue;
          }
          ajaxData.append(this.name, file, file.name);
        }

        const xhr = new XMLHttpRequest();
        // xhr.setRequestHeader('Content-Length')
        xhr.open(this.method, this.ajax, true);

        xhr.onload = () => {
          this.state = null;
          // if (xhr.status >= 200 && xhr.status < 400) {
          //   this.parseResponse(xhr.responseText);
          // } else {
          //   this.parseResponse(xhr.responseText);
          // }
          this.parseResponse(xhr.responseText);
        }

        xhr.upload.onprogress = (e) => {
          const loaded = e.loaded ? e.loaded : 0;
          const total = e.total ? e.total : 1;
          this.progress = parseInt((loaded / total) * 100, 10) + '%';
        }

        xhr.onerror = () => {
          this.setError('上传失败了！');
        }

        xhr.send(ajaxData);
      },
      iframeUpload() {
        if (this.testSameOrigin(this.ajax)) {
          const iframeName  = 'uploadiframe' + new Date().getTime();
          const iframe = document.createElement('iframe');

          iframe.setAttribute('name', iframeName);
          iframe.style.display = 'none';

          document.body.appendChild(iframe);
          this._wrappingForm.setAttribute('target', iframeName);

          iframe.addEventListener('load', () => {
            this.parseResponse(iframe.contentDocument.body.innerHTML);
            this._wrappingForm.removeAttribute('target');
            iframe.parentNode.removeChild(iframe);
          })
          this._wrappingForm.submit();
        } else {
          this.setError('iframe不支持跨域请求')
        }
      },
      /**
       * 处理响应结果
       */
      parseResponse(response) {
        let data = null;

        if(!response) {
          this.setError('服务器没有响应，或响应数据格式有问题');
        } else {
          try {
            data = JSON.parse(response);
          } catch (e) {
            this.setError('服务器响应数据格式有问题');
          }

          if(data) {
            if (data.success) {
              this.state = 'success';
              this.model = data.data;
              this.$dispatch('completed::file-upload', {model: this.model});
            } else if(data.error) {
              this.setError(data.error);
            }
          }
        }
      },
      setError(message) {
        this.state = 'error';
        this.errorMessage = message;
        this.$dispatch('completed::file-upload', {error: this.errorMessage});
      },
      retry() {
        this.state = 'retry';
        this.trigger(this._input, 'change');
      },
      restart() {
        this.state = null;
        this.fileList = [];
      },
      onChange(e) {
        if (this.state === 'retry') {
          this.state = null;
        }
        if (this.advancedUpload) {
          this.fileList = e.target.files;
          if (this.autoSubmit) {
            this.submitForm();
          }
        } else {
          this.fileList.push({name: this._input.value.replace(/^.*\\/, '')});
        }
      },
      testSameOrigin(url) {
        const loc = window.location;
        const a = document.createElement('a');
        a.href = url;
        return a.hostname == loc.hostname &&
               a.port == loc.port &&
               a.protocol == loc.protocol;
      },
      trigger(el, event, args) {
        const e = document.createEvent('HTMLEvents');
        e.initEvent(event, true, false);

        if (args) {
          for (const prop in args) {
            e[prop] = args[prop];
          }
        }

        try { el.dispatchEvent(e) } catch (e) {}
      }
    }
  }
</script>
