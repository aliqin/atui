<style lang="less">

</style>
<template>
<row>
  <v-col span="4"></v-col>
  <v-col span="20">
    <ul>
      <li><a>首页</a></li>
      <li><a>组件</a></li>
      <li><a>语言</a></li>
    </ul>
  </v-col>
</row>
</template>
<script>
import { Layout } from 'atui'
export default {
  name: 'docs-nav',
  components: {
    vRow: Layout.Row,
    vCol: Layout.Col
  }
}
</script>
