<template>
  <div class="bs-docs-section" id="accordion">
    <h3 class="page-header"><a href="#accordion" class="anchor">Accordion 手风琴</a></h3>
    <div class="bs-example">
      <p>
        <input type="checkbox" v-model="checked">
        Open only one at a time.
      </p>
      <accordion :one-at-atime="checked">
        <panel header="Panel #1" :is-open="true">
          内容一
        </panel>
        <panel header="Panel #2">
          内容二
        </panel>
        <panel header="Panel #3">
          内容三
        </panel>
        <panel header="Panel #4">
          内容四
        </panel>
      </accordion>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<input type="checkbox" v-model="checked">
<label for="checked">Open only one at a time.</label>

<accordion :one-at-atime="checked">
  <panel header="Panel #1" :is-open="true">
    ...
  </panel>
  <panel header="Panel #2">
    ...
  </panel>
  <panel header="Panel #3">
    ...
  </panel>
  <panel header="Panel #4">
    ...
  </panel>
</accordion>
</script></code></pre>
    <h2>Accordion Options</h2>
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
          <td>one-at-time</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Control whether expanding an item will cause the other items to close.</td>
        </tr>
      </tbody>
    </table>
    <h2>Panel Options</h2>
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
          <td>is-open</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether accordion group is open or closed.</td>
        </tr>
        <tr>
          <td>header</td>
          <td><code>String</code></td>
          <td></td>
          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import accordion from 'src/components/Accordion/'
import panel from 'src/components/Panel.vue'
  export default {
    data() {
      return {
        checked: true
      }
    },
    components: {
      accordion,
      panel
    }
  }
</script>
