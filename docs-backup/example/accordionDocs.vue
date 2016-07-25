<template>
  <div class="bs-docs-section" id="accordion">
    <h3 class="page-header"><a href="#accordion" class="anchor">Accordion 手风琴</a></h3>
    <div class="bs-example">
      <p>
        <input type="checkbox" v-model="checked">
        Open only one at a time.
      </p>
      <accordion :open-one="checked">
        <panel open>
          <div slot="panel-header" class="custom-class">Panel #1</div>
          内容一
        </panel>
        <panel>
          <div slot="panel-header" class="custom-class">Panel #2</div>
          内容二
        </panel>
        <panel>
          <div slot="panel-header" class="custom-class">Panel #3</div>
          内容三
        </panel>
        <panel>
          <div slot="panel-header" class="custom-class">Panel #4</div>
          内容四
        </panel>
      </accordion>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<input type="checkbox" v-model="checked">
<label for="checked">Open only one at a time.</label>
<accordion :one-at-atime="checked">
  <panel :is-open="true">
    <div slot="panel-header" class="custom-class">Panel #1</div>
    内容一
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #2</div>
    内容二
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #3</div>
    内容三
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #4</div>
    内容四
  </panel>
</accordion>
</script></code></pre>
    <h2>Accordion Options</h2>
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
          <td>one-at-time</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Control whether expanding an item will cause the other items to close.</td>
        </tr>
      </tbody>
    </table>
    <h2>Panel Options</h2>
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
          <td>is-open</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether accordion group is open or closed.</td>
        </tr>
        <tr>
          <td>slot::panel-header</td>
          <td><code>slot node</code></td>
          <td></td>
          <td>以内容分发的形式自定义header里面的内容，注意：因为header自动绑定了展开收起的事件，所以
          如果用户自定义的元素里有事件绑定的操作，建议使用事件修饰符（例：@click.prev.stop=""）</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  import {Accordion} from 'src/'
  const {Panel} = Accordion

  export default {
    data() {
      return {
        checked: true
      }
    },
    components: {
      Accordion,
      Panel
    }
  }
</script>
<style>
  .custom-class {
    padding: 10px 15px;
  }
</style>
