<template>
  <div class="bs-docs-section" id="trigger">
    <h3 class="page-header"><a href="#trigger" class="anchor">Trigger 触发弹窗</a></h3>
    <div class="bs-example">
      <h3>普通</h3>
      <trigger trigger="click" placement="top">
        <button class="atui-btn" slot="trigger">click to trigger</button>
        <div slot="popup">I'm a click popup</div>
      </trigger>
      <trigger trigger="hover">
        <button class="atui-btn" slot="trigger">hover to trigger</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger="click" placement="topRight">
        <button class="atui-btn" slot="trigger">click to show topRight</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger="hover" placement="topLeft">
        <button class="atui-btn" slot="trigger">topLeft</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger="hover" placement="bottomRight">
        <button class="atui-btn" slot="trigger">bottomRight</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger="focus">
        <input type="text" class="atui-form-control" placeholder="Focus" slot="trigger">
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <h3>复杂</h3>
      <trigger trigger="click">
        <button class="atui-btn" slot="trigger">popup里继续trigger</button>
        <div slot="popup">
          <trigger trigger="hover" placement="right">
            <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
            <div slot="popup" style="padding: 20px">I'm a hover popup</div>
          </trigger>
        </div>
      </trigger>
      <trigger trigger="hover" placement="right">
        <trigger trigger="hover" slot="trigger">
          <button class="atui-btn" slot="trigger">同时多个popup</button>
          <div slot="popup">I'm popup-1</div>
        </trigger>
        <div slot="popup">I'm popup-2</div>
      </trigger>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<h3>普通</h3>
<trigger trigger="click" placement="top">
  <button class="atui-btn" slot="trigger">click to trigger</button>
  <div slot="popup">I'm a click popup</div>
</trigger>
<trigger trigger="hover">
  <button class="atui-btn" slot="trigger">hover to trigger</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>
<trigger trigger="click" placement="topRight">
  <button class="atui-btn" slot="trigger">click to show topRight</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>
<trigger trigger="hover" placement="topLeft">
  <button class="atui-btn" slot="trigger">topLeft</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>
<trigger trigger="hover" placement="bottomRight">
  <button class="atui-btn" slot="trigger">bottomRight</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>
<trigger trigger="focus">
  <input type="text" class="atui-form-control" placeholder="Focus" slot="trigger">
  <div slot="popup">I'm a hover popup</div>
</trigger>
<h3>复杂</h3>
<trigger trigger="click">
  <button class="atui-btn" slot="trigger">popup里继续trigger</button>
  <div slot="popup">
    <trigger trigger="hover" placement="right">
      <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
      <div slot="popup" style="padding: 20px">I'm a hover popup</div>
    </trigger>
  </div>
</trigger>
<trigger trigger="hover" placement="right">
  <trigger trigger="hover" slot="trigger">
    <button class="atui-btn" slot="trigger">同时多个popup</button>
    <div slot="popup">I'm popup-1</div>
  </trigger>
  <div slot="popup">I'm popup-2</div>
</trigger>
</script></code></pre>
    <h2>Options</h2>
    <table class="atui-table table-bordered">
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
        </tr>
        <tr>
          <td>placement</td>
          <td><code>String</code></td>
          <td></td>
          <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight
          </td>
        </tr>
        <tr>
          <td>popupCls</td>
          <td><code>String</code></td>
          <td></td>
          <td>自定义popup的样式名
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {Trigger} from 'src/'

  export default {
    components: {
      Trigger
    }
  }
</script>
