<template>
  <div class="bs-docs-section" id="tooltip">
    <h3 class="page-header"><a href="#tooltip" class="anchor">Tooltip 文字提示</a></h3>
    <div class="bs-example">
          <tooltip content="talk is cheap show me the code" placement="topLeft" >
            <button class="btn btn-default ">上左</button>
          </tooltip>
          <tooltip   content="talk is cheap show me the code" placement="top">
            <button class="btn btn-default ">上边</button>
          </tooltip>
          <tooltip   content="Lorem ipsum dolor sit amet" placement="topRight">
            <button class="btn btn-default ">上右</button>
          </tooltip>

          <tooltip   content="what does the fox say ？" placement="leftTop">
            <button class="btn btn-default ">左上</button>
          </tooltip>
          <tooltip   content="Are you kidding me?" placement="left">
            <button class="btn btn-default ">左边</button>
          </tooltip>
          <tooltip   content="no, i'm serious! " placement="leftBottom">
            <button class="btn btn-default ">左下</button>
          </tooltip>

            <tooltip   content="bang bang bang!" placement="rightTop">
              <button class="btn btn-default ">右上</button>
            </tooltip>
            <tooltip   content="Lorem ipsum dolor sit amet" placement="right">
              <button class="btn btn-default ">右边</button>
            </tooltip>
            <tooltip   content="Lorem ipsum dolor sit amet" placement="rightBottom">
              <button class="btn btn-default ">右下</button>
            </tooltip>
            <tooltip  placement="bottomLeft" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
              <button class="btn btn-default ">下左</button>
            </tooltip>
            <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
              <button class="btn btn-default ">下边</button>
            </tooltip>
            <tooltip  placement="bottomRight" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
              <button class="btn btn-default ">下右</button>
            </tooltip>

      <h4>Triger</h4>
      <p>
        <tooltip trigger="click"
        effect="fadein" content="提示文字" placement="top" trigger="hover">
            <button class="btn btn-default ">Click</button>
        </tooltip>
      </p>
      <tooltip effect="scale"
    content="Lorem ipsum dolor sit amet" placement="topLeft" trigger="focus">
        <input type="text" class="form-control" placeholder="Focus">
      </tooltip>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<tooltip content="talk is cheap show me the code" placement="topLeft">
<button class="btn btn-default ">上左</button>
</tooltip>
<tooltip content="talk is cheap show me the code" placement="top">
<button class="btn btn-default ">上边</button>
</tooltip>
<tooltip content="Lorem ipsum dolor sit amet" placement="topRight">
<button class="btn btn-default ">上右</button>
</tooltip>
<tooltip content="what does the fox say ？" placement="leftTop">
<button class="btn btn-default ">左上</button>
</tooltip>
<tooltip content="Are you kidding me?" placement="left">
<button class="btn btn-default ">左边</button>
</tooltip>
<tooltip content="no, i'm serious! " placement="leftBottom">
<button class="btn btn-default ">左下</button>
</tooltip>
<tooltip content="bang bang bang!" placement="rightTop">
  <button class="btn btn-default ">右上</button>
</tooltip>
<tooltip content="Lorem ipsum dolor sit amet" placement="right">
  <button class="btn btn-default ">右边</button>
</tooltip>
<tooltip content="Lorem ipsum dolor sit amet" placement="rightBottom">
  <button class="btn btn-default ">右下</button>
</tooltip>
<tooltip  placement="bottomLeft" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="btn btn-default ">下左</button>
</tooltip>
<tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="btn btn-default ">下边</button>
</tooltip>
<tooltip  placement="bottomRight" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="btn btn-default ">下右</button>
</tooltip>
<tooltip trigger="click"
  effect="fadein" content="提示文字" placement="top" trigger="hover">
  <button class="btn btn-default ">Click</button>
  </tooltip>
<tooltip effect="scale"
content="Lorem ipsum dolor sit amet" placement="topLeft" trigger="focus">
  <input type="text" class="form-control" placeholder="Focus">
</tooltip>
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
        <td>trigger</td>
        <td><code>String</code></td>
        <td><code>click</code></td>
        <td>以何种方式触发显示气泡框,可选hover, click, focus</td>
      </tr>
      <tr>
        <td>effect</td>
        <td><code>String</code></td>
        <td><code>scale</code></td>
        <td>过渡效果，可选scale, fadein</td>
      <tr>
        <td>content</td>
        <td><code>String</code></td>
        <td></td>
        <td>内容</td>
      </tr>
        <td>placement</td>
        <td><code>String</code></td>
        <td></td>
        <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Tooltip} from 'src/'

  export default {
    data() {
      return {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
      }
    },
    components: {
      Tooltip
    }
  }
</script>

<style lang="less">
  .table-demo {
    position: relative;
    width: 100%;
    td {
      text-align: center;
      width: 33%;
    }
  }

</style>
