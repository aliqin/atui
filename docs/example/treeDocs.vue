<template>
  <div class="bs-docs-section" id="tree">
    <h3 class="page-header"><a href="#tree" class="anchor">Tree 树形菜单</a></h3>
    <div class="bs-example">
    <h4>普通树形</h4>
    <tree :data-source="dataSource"></tree>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<tree :data-source="dataSource"></tree>
//
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
export default {
  components: {
    Tree
  },
  data () {
    return {
      dataSource : data
    }
  }
}
</script></code></pre>

  </div>
</template>

<script>
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
import { Tree } from 'src/'
export default {
  components: {
    Tree
  },
  data () {
    return {
      dataSource : data
    }
  }
}
</script>
