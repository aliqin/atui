<template>
  <div class="bs-docs-section" id="trigger">
    <h3 class="page-header"><a href="#trigger" class="anchor">Trigger 触发弹窗</a></h3>
    <div class="bs-example">
      <h3>普通</h3>
      <trigger trigger-event="click" placement="top">
        <button class="atui-btn" slot="trigger">click to trigger</button>
        <div slot="popup">I'm a click popup</div>
      </trigger>
      <trigger trigger-event="hover">
        <button class="atui-btn" slot="trigger">hover to trigger</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger-event="click" placement="topRight">
        <button class="atui-btn" slot="trigger">click to show topRight</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger-event="hover" placement="topLeft">
        <button class="atui-btn" slot="trigger">topLeft</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <trigger trigger-event="hover" placement="bottomRight">
        <button class="atui-btn" slot="trigger">bottomRight</button>
        <div slot="popup">I'm a hover popup</div>
      </trigger>
      <h3>复杂</h3>
      <trigger trigger-event="click">
        <button class="atui-btn" slot="trigger">popup里继续trigger</button>
        <div slot="popup">
          <trigger trigger-event="hover" placement="right">
            <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
            <div slot="popup" style="padding: 20px">I'm a hover popup</div>
          </trigger>
        </div>
      </trigger>
      <trigger trigger-event="hover" placement="right">
        <trigger trigger-event="hover" slot="trigger">
          <button class="atui-btn" slot="trigger">同时多个popup</button>
          <div slot="popup">I'm popup-1</div>
        </trigger>
        <div slot="popup">I'm popup-2</div>
      </trigger>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<trigger>
  <button class="atui-btn" slot="trigger">hover to trigger</button>
  <div slot="popup">I'm a popup</div>
</trigger>
</script></code></pre>
  <h2>Options</h2>

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
