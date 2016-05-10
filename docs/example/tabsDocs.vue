<template>
  <div class="bs-docs-section" id="tabs">
    <h3 class="page-header"><a href="#tabs" class="anchor">Tabs 标签页</a></h3>
    <div class="bs-example">
    <h4 class="example-title">基础型</h4>
      <tabs :base="true">
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
      <h4 class="example-title">迷你型</h4>
      <tabs :base="true" size="small">
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
      <h4 class="example-title">Tab数量较多的情况</h4>
      <tabs :base="true" trigger="hover">
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
        <tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="系统短信签名啊啊啊啊啊啊啊啊">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
           <p>
              选项卡二内容
           </p>
        </tab>
      </tabs>
      <br><br>
      <h4 class="example-title">选项卡型</h4>
      <tabs >
        <tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
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
        <tab header="被禁用的" disabled>
          ...
        </tab>
        <tab header="推广短信签名">
           <p>
              选项卡二内容
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
        <tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
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
<tabs :base="true" size="small">
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
<tabs :base="true" trigger="hover">
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
  <tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
     <p>
        选项卡二内容
     </p>
  </tab>
</tabs>
<tabs >
  <tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
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
  <tab header="被禁用的" disabled>
    ...
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
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
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
</tabs>
</script></code></pre>
  <h2>Tab 选项 (非 TABS)</h2>
  <table class="atui-table table-bordered">
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
        <td>Heading text of the tab.</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>是否禁用当前Tab</td>
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
      <tr>
        <td>size</td>
        <td><code>String</code></td>
        <td>'default'</td>
        <td>大小，提供default和small两种大小</td>
      </tr>
      <tr>
        <td>trigger</td>
        <td><code>String</code></td>
        <td>click</td>
        <td>以何种方式触发选中Tab(可选，click，hover)</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Tabs} from 'src/'
  const {Tab} = Tabs

  export default {
    data () {
      return {
      }
    },
    components: {
      Tabs,
      Tab
    }
  }
</script>

<style>
  .example-title {
    margin: 20px 0;
  }
</style>
