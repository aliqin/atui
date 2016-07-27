<template>
  <div class="bs-docs-section" id="popover">
    <h3 class="page-header"><a href="#popover" class="anchor">Popover 气泡</a></h3>
    <div class="bs-example">
      <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="top">
        <button class="atui-btn ">Popover on top</button>
      </popover>
      <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="left">
        <button class="atui-btn">Popover on left</button>
      </popover>
      <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="right">
        <button class="atui-btn">Popover on right</button>
      </popover>
      <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom">
        <button class="atui-btn">Popover on bottom</button>
      </popover>
      <hr>
      <h4>No title</h4>
      <popover effect="fade" content="我是内容，我是内容，我是内容" placement="top">
        <button class="atui-btn">Popover on top</button>
      </popover>
      <popover effect="fade" content="我是内容，我是内容，我是内容" placement="left">
        <button class="atui-btn">Popover on left</button>
      </popover>
      <popover effect="fade" content="我是内容，我是内容，我是内容" placement="right">
        <button class="atui-btn">Popover on right</button>
      </popover>
      <popover effect="fade" content="我是内容，我是内容，我是内容" placement="bottom">
        <button class="atui-btn">Popover on bottom</button>
      </popover>
      <hr>
      <h4>Triger</h4>
      <p>
        <popover effect="scale"  title="我是标题" content="我是内容，我是内容，我是内容" placement="top" trigger="hover">
            <button class="atui-btn">Mouseenter</button>
        </popover>
      </p>
      <p>
        <popover effect="fade" content="我是内容，我是内容，我是内容" placement="right" :show="true" trigger="always">
            <button class="atui-btn">always show</button>
        </popover>
      </p>
      <popover effect="scale"
      title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom" trigger="focus">
        <input type="text" class="form-control" placeholder="Focus">
      </popover>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="top">
  <button class="atui-btn ">Popover on top</button>
</popover>
<popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="left">
  <button class="atui-btn">Popover on left</button>
</popover>
<popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="right">
  <button class="atui-btn">Popover on right</button>
</popover>
<popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom">
  <button class="atui-btn">Popover on bottom</button>
</popover>
<hr>
<h4>No title</h4>
<popover effect="fade" content="我是内容，我是内容，我是内容" placement="top">
  <button class="atui-btn">Popover on top</button>
</popover>
<popover effect="fade" content="我是内容，我是内容，我是内容" placement="left">
  <button class="atui-btn">Popover on left</button>
</popover>
<popover effect="fade" content="我是内容，我是内容，我是内容" placement="right">
  <button class="atui-btn">Popover on right</button>
</popover>
<popover effect="fade" content="我是内容，我是内容，我是内容" placement="bottom">
  <button class="atui-btn">Popover on bottom</button>
</popover>
<hr>
<h4>Triger</h4>
<p>
  <popover effect="scale"  title="我是标题" content="我是内容，我是内容，我是内容" placement="top" trigger="hover">
      <button class="atui-btn">Mouseenter</button>
  </popover>
</p>
<popover effect="scale"
title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom" trigger="focus">
  <input type="text" class="form-control" placeholder="Focus">
</popover>
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
        <td><code>String</code>, one of <code>click</code>
        <code>focus</code>
        <code>hover</code></td>
        <td><code>click</code></td>
        <td>How the popover is triggered.</td>
      </tr>
      <tr>
        <td>effect</td>
        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>
        <td><code>fade</code></td>
        <td></td>
      </tr>
      <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>content</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>header</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the header.</td>
      </tr>
      <tr>
        <td>placement</td>
        <td><code>String</code>, one of <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></td>
        <td></td>
        <td>How to position the popover.</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Popover} from 'src/'
  export default {
    components: {
      Popover
    }
  }
</script>
