<template>
  <div class="bs-docs-section" id="modal">
    <h3 class="page-header"><a href="#modal" class="anchor">Modal 对话框</a></h3>
    <div class="bs-example">
      <button class="btn btn-default" @click="showModal = true">显示弹窗</button>
      <modal title="Modal title" :show.sync="showModal" backdrop="false">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title">Modal <b>标题</b></h4>
        </div>
        <div slot="modal-body" class="modal-body">
          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
        </div>
      </modal>
      <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
      <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
        <div slot="modal-body" class="modal-body">
          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
        </div>
      </modal>
      <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
      <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
        <div slot="modal-header"></div>
        <div slot="modal-body" class="modal-body">
          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
        </div>
      </modal>
      <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
      <modal :show.sync="showCustomModal" effect="fade" width="50%">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
        </div>
        <div slot="modal-body" class="modal-body">
          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
        </div>
        <div slot="modal-footer" class="modal-footer">
          <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
          <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
        </div>
      </modal>
      <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
      <modal title="Large Modal" :show.sync="largeModal" large>
        <div slot="modal-body" class="modal-body">
          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
        </div>
      </modal>
      <button class="btn btn-danger" @click="smallModal = true">小弹窗</button>
      <modal title="Small Modal" :show.sync="smallModal" small>
        <div slot="modal-body" class="modal-body">
          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
        </div>
      </modal>

      <button @click="showConfirm">使用程序直接弹出</button>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<button class="btn btn-default"
  @click="showModal = true"
  >显示弹窗
</button>
<modal :show.sync="showModal">
  <div slot="modal-header" class="modal-header">
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div slot="modal-body" class="modal-body">...</div>
</modal>

<button class="btn btn-primary"
  @click="fadeModal = true">
  Fade modal
</button>
<modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
  <div slot="modal-body" class="modal-body">...</div>
</modal>

<button class="btn btn-success"
  @click="zoomModal = true">
  Zoom modal
</button>
<modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
  <div slot="modal-body" class="modal-body">...</div>
</modal>

<button class="btn btn-default"
  @click="showCustomModal = true">
  Show custom modal
</button>
<modal :show.sync="showCustomModal" effect="fade" width="400">
  <div slot="modal-header" class="modal-header">
    <h4 class="modal-title">
      <i>Custom</i> <code>Modal</code> <b>Title</b>
    </h4>
  </div>
  <div slot="modal-body" class="modal-body">...</div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
    <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
  </div>
</modal>
<button class="btn btn-default"
  @click="largeModal = true"
  >Large Modal
</button>
<modal :show.sync="largeModal">
  <div slot="modal-body" class="modal-body">...</div>
</modal>
<button class="btn btn-default"
  @click="smallModal = true"
  >Small Modal
</button>
<modal :show.sync="smallModal">
  <div slot="modal-body" class="modal-body">...</div>
</modal>
  </script></code></pre>
  <h2>Options</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td>标题</td>
      </tr>
      <tr>
        <td>width</td>
        <td><code>Number, String or null</code></td>
        <td><code>null</code></td>
        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>
      </tr>
      <tr>
        <td>callback</td>
        <td><code>Function</code></td>
        <td></td>
        <td>当点击主要按钮时触发的回调.</td>
      </tr>
      <tr>
        <td>large</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>大的弹窗</td>
      </tr>
      <tr>
        <td>small</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>小的弹窗</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Modal} from 'src/'
  const confirm = Modal.confirm
  export default {
    data() {
      return {
        showModal: false,
        fadeModal: false,
        zoomModal: false,
        showCustomModal: false,
        largeModal: false,
        smallModal: false
      }
    },
    components: {
      Modal
    },
    methods:{
      showConfirm() {
        confirm({
          title: '您是否确认要删除这项内容',
          content: '一些解释',
          onOk() {
            console.log('确定');
          },
          onCancel() {}
        });
      }
    }
  }
</script>
