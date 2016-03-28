<template>
  <div class="bs-docs-section" id="tabs">
    <h3 class="page-header"><a href="#tabs" class="anchor">Tabs 标签页</a></h3>
    <div class="bs-example">
    <h4 class="example-title">基础型</h4>
      <v-tabs :base="true">
        <v-tab header="系统短信签名">
          <p>
            选项卡一内容
          </p>
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="被禁用的" disabled>
          ...
        </v-tab>
      </v-tabs>
      <br><br>
      <h4 class="example-title">Tab数量较多的情况</h4>
      <v-tabs :base="true">
        <v-tab header="系统短信签名">
          <p>
            选项卡一内容
          </p>
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="被禁用的" disabled>
          ...
        </v-tab>
        <v-tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="系统短信签名啊啊啊啊啊啊啊啊">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
           <p>
              选项卡二内容
           </p>
        </v-tab>
      </v-tabs>
      <br><br>
      <h4 class="example-title">选项卡型</h4>
      <v-tabs >
        <v-tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
          <p>
            选项卡一内容
          </p>
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="被禁用的" disabled>
          ...
        </v-tab>
        <v-tab header="被禁用的" disabled>
          ...
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="被禁用的" disabled>
          ...
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
        <v-tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </v-tab>
      </v-tabs>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<v-tabs>
  <v-tab header="系统短信签名">
    ...
  </v-tab>
  <v-tab header="推广短信签名">
    ...
  </v-tab>
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
</v-tabs>
<v-tabs :base="true">
  <v-tab header="系统短信签名">
    <p>
      选项卡一内容
    </p>
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
  <v-tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </v-tab>
</v-tabs>
<v-tabs >
  <v-tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
    <p>
      选项卡一内容
    </p>
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
</v-tabs>
</script></code></pre>
  <h2>Tab 选项 (非 TABS)</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>参数</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>header</td>
        <td><code>String</code></td>
        <td></td>
        <td>Heading text of the v-tab.</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>Whether v-tab is clickable and can be activated. </td>
      </tr>
      <tr>
        <td>base</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>是否采用基础型的Tab样式</td>
      </tr>
      <tr>
        <td>show-len</td>
        <td><code>Number</code></td>
        <td>3</td>
        <td>当前想要显示出多少个Tab</td>
      </tr>

    </tbody>
  </table>
  </div>
</template>

<script>
  // import v-Tabs from 'src/components/v-Tabset/'
  // const {v-Tab} = v-Tabs
  // import v-Tabs from 'src/components/v-Tabset/v-Tabset'
  // import v-Tab from 'src/components/v-Tabset/v-Tab'
  import vTabs from 'src/components/Tabs/'
  const {vTab} = vTabs
  export default {
    data () {
      return {
        tabType: "base"
      }
    },
    components: {
      vTabs,
      vTab
    }
  }
</script>

<style>
  .example-title {
    margin: 20px 0;
  }
</style>
