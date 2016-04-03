<template>
  <div class="bs-docs-section" id="select">
    <h3 class="page-header"><a href="#select" class="anchor">Select 下拉框</a></h3>
    <div class="bs-example">
      <p>
        <pre>
选中值 : {{single}}
        </pre>
      </p>
      <v-select :default-value.sync="single" placeholder="请选择一个水果" style="width:200px;" @change="onSlectChange">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana" disabled>Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">OrangeText</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr>
      <h4>多选下拉</h4>
      <p>
        <pre>
选中值 : {{multiple.join(', ')}}
        </pre>
      </p>
      <v-select multiple :default-value.sync="multiple">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana">Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr>
      <h4>多选下拉限制</h4>
      <p>
        <pre>
选中值 : {{multipleLimit.join(', ')}}
        </pre>
      </p>
      <v-select multiple :limit="2" :default-value.sync="multipleLimit">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana">Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr>
      <h4>自定义模板</h4>
      <p>
        <pre>
选中值 : {{custom.join(', ')}}
        </pre>
      </p>
      <v-select multiple :default-value.sync="custom">
        <v-option value="success"><icon type="success" color="green"></icon> 成功</v-option>
        <v-option value="error"><icon type="error" color="red"></icon> 错误</v-option>
        <v-option value="help"><icon type="help"></icon> 帮助</v-option>
        <v-option value="info"><icon type="info"></icon> 信息</v-option>
      </v-select>
      <hr />
      <h4>使用数据填充Select选择框内容</h4>
      <p>
        可以指定一个数组来填充选项内容，并可搜索
        <pre>
选中值 : {{arr}}
        </pre>
      </p>
      <v-select :default-value.sync="arr" :options="fruitOptions" :search="true" :close-on-select="true">
      </v-select>

      <hr />
      <h4>Automatically close array driven selects</h4>
      <p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
      <v-select :default-value.sync="arr2" :options="fruitOptions" :close-on-select="true">
      </v-select>

      <h4>禁用的下拉框</h4>
      <v-select :default-value.sync="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
      </v-select>

    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<p>
  <pre>
选中值 : {{single}}
  </pre>
</p>
<v-select :default-value.sync="single" placeholder="请选择一个水果" style="width:200px;" @change="onSlectChange">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<h4>多选下拉</h4>
<p>
  <pre>
选中值 : {{multiple.join(', ')}}
  </pre>
</p>
<v-select multiple :default-value.sync="multiple">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<h4>多选下拉限制</h4>
<p>
  <pre>
选中值 : {{multipleLimit.join(', ')}}
  </pre>
</p>
<v-select multiple :limit="2" :default-value.sync="multipleLimit">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<h4>自定义模板</h4>
<p>
  <pre>
选中值 : {{custom.join(', ')}}
  </pre>
</p>
<v-select multiple :default-value.sync="custom">
  <v-option value="success"><icon type="success" color="green"></icon> 成功</v-option>
  <v-option value="error"><icon type="error" color="red"></icon> 错误</v-option>
  <v-option value="help"><icon type="help"></icon> 帮助</v-option>
  <v-option value="info"><icon type="info"></icon> 信息</v-option>
</v-select>
<hr />
<h4>使用数据填充Select选择框内容</h4>
<p>
  可以指定一个数组来填充选项内容，并可搜索
  <pre>
选中值 : {{arr}}
  </pre>
</p>
<v-select :default-value.sync="arr" :options="fruitOptions" :search="true" :close-on-select="true">
</v-select>

<hr />
<h4>Automatically close array driven selects</h4>
<p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
<v-select :default-value.sync="arr2" :options="fruitOptions" :close-on-select="true">
</v-select>

<h4>禁用的下拉框</h4>
<v-select :default-value.sync="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
</v-select>
</script></code></pre>

    <h2>Select 选项</h2>
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
          <td>defaultValue</td>
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
  import Select from 'src/components/Select/'
  import Icon from 'src/components/Icon/'
  const Option = Select.Option

  export default {
    components: {
      vSelect:Select,
      vOption:Option,
      Icon:Icon
    },
    data() {
      return {
        fruitOptions: [
          {value:'Apple', label:'Apple'},
          {value:'Banana', label:'Banana'},
          {value:'Cherry', label:'Cherry'},
          {value:'Orange', label:'Orange'},
          {value:'Grape', label:'Grape'},
        ],
        arr: [],
        arr2: [],
        single: [],
        multiple: [],
        multipleLimit: [],
        custom: [],
        disabled: []
      }
    },
    methods:{
      onSlectChange(text,value) {
        console.log(text,value)
      }
    }
  }
</script>
