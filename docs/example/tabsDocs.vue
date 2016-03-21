<template>
  <div class="bs-docs-section" id="tabs">
    <h3 class="page-header"><a href="#tabs" class="anchor">Tabs 标签页</a></h3>
    <div class="bs-example">
      <h4>基础型</h4>
      <tabs :tab-type="tabType">
        <tab header="系统短信签名">
          <p>
            选项卡一内容
          </p>
        </tab>
        <tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="被禁用的" disabled>
          ...
        </tab>
      </tabs>
      <br><br>
      <h4>选项卡型</h4>
      <tabs >
        <tab header="系统短信签名">
          <p>
            选项卡一内容
          </p>
        </tab>
        <tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="被禁用的" disabled>
          ...
        </tab>
      </tabs>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<tabs>
  <tab header="系统短信签名">
    ...
  </tab>
  <tab header="推广短信签名">
    ...
  </tab>
  <tab header="被禁用的" disabled>
    ...
  </tab>
</tabs>
</script></code></pre>
  <h2>Tab 选项 (非 TABS)</h2>
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
    data () {
      return {
        tabType: "base"
      }
    },
    components: {
      tabs,
      tab
    }
  }
</script>
