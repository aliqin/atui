<template>
  <div class="bs-docs-section" id="switch">
    <h3 class="page-header"><a href="#switch" class="anchor">Switch 开关</a></h3>
    <div class="bs-example">
      <h4 class="example-title" >基本类型</h4>
        <table class="switchDocs-demo-table">
          <tr>
            <th>关</th>
            <th>开</th>
            <th>禁用</th>
          </tr>
          <tr>
            <td><v-switch small color="#000"></v-switch></td>
            <td><v-switch small checked @change="changeHandler"></v-switch>
            </td>
            <td><v-switch small disabled></v-switch></td>
          </tr>
          <tr>
            <td><v-switch></v-switch></td>
            <td><v-switch checked @change="changeHandler"></v-switch></td>
            <td><v-switch disabled></v-switch></td>
          </tr>
        </table>

      <h4 class="example-title">带文字形式</h4>
        <table class="switchDocs-demo-table">
          <tr>
            <td><v-switch>
          <span slot="checkedPart">开</span>
          <span slot="unCheckedPart">关</span>
        </v-switch></td>
            <td><v-switch :disabled="disabled" checked>
          <span slot="checkedPart">开</span>
          <span slot="unCheckedPart">关</span>
        </v-switch>
        </td>
            <td><v-switch :disabled="disabled">
          <span slot="checkedPart">开</span>
          <span slot="unCheckedPart">关</span>
        </v-switch>
        </td>
          </tr>
        </table>
        <h4 class="example-title">带图标形式</h4>
        <table class="switchDocs-demo-table">
            <tr>
              <td>
                <v-switch>
                  <span slot="checkedPart"><v-icon type="tick" size="16"></v-icon></span>
                  <span slot="unCheckedPart"><v-icon type="close" size="12"></v-icon></span>
                </v-switch>
              </td>
            </tr>
        </table>

        <v-button large primary value="toggle disabled" @click="_clickHandler"></v-button>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<v-switch small color="#000"></v-switch>
<v-switch small checked @change="changeHandler"></v-switch>
<v-switch small disabled></v-switch>
<v-switch></v-switch>
<v-switch checked @change="changeHandler"></v-switch>
<v-switch disabled></v-switch>
<v-switch>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch :disabled="disabled" checked>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch :disabled="disabled">
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch>
  <span slot="checkedPart"><v-icon type="tick" size="16"></v-icon></span>
  <span slot="unCheckedPart"><v-icon type="close" size="12"></v-icon></span>
</v-switch>
</script></code></pre>
  </div>
  <h2>Options</h2>
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
        <td>checked</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>当前开关是否选中</td>
      </tr>
      <tr>
        <td>value</td>
        <td><code>String</code></td>
        <td></td>
        <td>switch的值</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>当前开关是否禁用</td>
      </tr>
      <tr>
        <td>color</td>
        <td><code>String</code></td>
        <td>#00a0ff</td>
        <td>switch的颜色</td>
      </tr>
      <tr>
        <td>@change</td>
        <td><code>Function(switcher)</code></td>
        <td></td>
        <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>
      </tr>
      <tr>
        <td>slot::checkedPart</td>
        <td><code>slot node</code></td>
        <td></td>
        <td>选中时的内容</td>
      </tr>
      <tr>
        <td>slot::unCheckedPart</td>
        <td><code>slot node</code></td>
        <td></td>
        <td>没选中时的内容</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import {Switch,Button,Icon} from 'src/'

  export default {
    data () {
      return {
        checked: true,
        disabled: true,
        smallModal: false
      }
    },
    components: {
      vSwitch:Switch,
      vButton:Button,
      vIcon:Icon
    },
    methods: {
      changeHandler (switcher) {
        alert(switcher.checked)
      },
      _clickHandler () {
        this.disabled = !this.disabled
      }
    }
  }
</script>

