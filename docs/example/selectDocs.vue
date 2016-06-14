<template>
  <div class="bs-docs-section" id="select">
    <h3 class="page-header"><a href="#select" class="anchor">Select 下拉框</a></h3>
    <div class="bs-example">
        <pre>
        选中值 : {{single1}}
        </pre>
      <v-select :value.sync="single1" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
        <v-option value="Apple">苹果</v-option>
        <v-option value="Banana" disabled>Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">OrangeText</v-option>
        <v-option value="Grape">Grape</v-option>
        <v-option value="agg">鸡蛋</v-option>
        <v-option value="芒果">芒果</v-option>
      </v-select>

      <v-select :value="single">
        <v-option value="a">终端</v-option>
        <v-option value="b">线路</v-option>
        <v-option value="c">号码拦截</v-option>
      </v-select>

      <v-select tags placeholder="请输入签名">

      </v-select>

      <v-select :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
        <v-option value="Apple">苹果</v-option>
        <v-option value="Banana" disabled>Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">OrangeText</v-option>
        <v-option value="Grape">Grape</v-option>
        <v-option value="agg">鸡蛋</v-option>
        <v-option value="芒果">芒果</v-option>
      </v-select>
      <hr>
      <h4>多选下拉(只能选已有的)</h4>

      <v-select multiple @change="onSlectChange">
        <v-option value="Apple">苹果</v-option>
        <v-option value="Banana">香蕉</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>

      <hr>
      <h4>tags(输入回车时变成一个tag)</h4>
      选中值 : {{tagValues | json}} <br/>
      <v-select tags :selected-options="selectedOptions" @change="onTagChange">
        <v-option value="Apple">苹果</v-option>
        <v-option value="Banana">香蕉</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr />


      <h4>下拉出自定义类容</h4>
      <v-select placeholder="选择类别" style="width:200px;">
      <v-option>
        <tabs>
          <tab header="系统短信签名"></tab>
          <tab header="系统短信签名"></tab>
          <tab header="系统短信签名"></tab>
        </tabs>
      </v-option>
      </v-select>

    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<pre>
  选中值 : {{single}}
  </pre>
<v-select :value="single" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
  <v-option value="Apple">苹果</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<h4>多选下拉(只能选已有的)</h4>

<v-select multiple @change="onSlectChange">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>

<hr>
<h4>tags(输入回车时变成一个tag)</h4>

<v-select tags :value="Banana">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr />


<h4>下拉出自定义类容</h4>
<v-select placeholder="选择类别" style="width:200px;">
<v-option>
  <tabs>
    <tab header="系统短信签名"></tab>
    <tab header="系统短信签名"></tab>
    <tab header="系统短信签名"></tab>
  </tabs>
</v-option>
</v-select>

</script></code></pre>

    <h2>Select 选项</h2>
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
          <td>value</td>
          <td><code>Array/String</code></td>
          <td><code>[]</code></td>
          <td>默认要选中的值，如果是多选框可以设置数组</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td>请选择</td>
          <td>默认选择提示</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否多选</td>
        </tr>
        <tr>
          <td>limit</td>
          <td><code>Number</code></td>
          <td><code>1024</code></td>
          <td>Limit the number of elements you are allowed to select.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <tr>
          <td>onchange</td>
          <td><code>Function</code></td>
          <td><code></code></td>
          <td>选中项发生变化时触发</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import {Select,Icon,Tabs} from 'src/'
  const Option = Select.Option
  const Tab = Tabs.Tab
  export default {
    components: {
      vSelect:Select,
      vOption:Option,
      Icon:Icon,
      Tabs,
      Tab
    },
    data() {
      return {
        placeholder:'请选择一个水果',
        single: 'c',
        single1: 'Apple',
        tagValues: [],
        selectedOptions : [
          {label: 'Apple', value: 'Apple'}
        ]
      }
    },
    ready() {
      let me = this
      setTimeout(()=> me.single = 'b',3000)
    },
    methods:{
      onSlectChange(option) {
        console.log(option)
      },
      onTagChange(values) {
        this.tagValues = values
      }
    }
  }
</script>
