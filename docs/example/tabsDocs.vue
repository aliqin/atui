<template>
  <div class="bs-docs-section" id="tabs">
    <h1 class="page-header"><a href="#tabs" class="anchor">Tabs 标签页</a></h1>
    <div class="bs-example">
      <tabs>
        <tab header="one">
          <p>
            选项卡一内容
          </p>
        </tab>
        <tab header="two">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="three" disabled>
          ...
        </tab>
      </tabs>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<tabs>
  <tab header="one">
    ...
  </tab>
  <tab header="two">
    ...
  </tab>
  <tab header="three" disabled>
    ...
  </tab>
</tabs>
</script></code></pre>
  <h2>Tab Options (NOT TABS)</h2>
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
        <td>header</td>
        <td><code>String</code></td>
        <td></td>
        <td>Heading text of the tab.</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>Whether tab is clickable and can be activated. </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import tabs from 'src/components/Tabset.vue'
  import tab from 'src/components/Tab.vue'
  export default {
    components: {
      tabs,
      tab
    }
  }
</script>
