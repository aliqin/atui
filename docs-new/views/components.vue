<style lang="less">

</style>
<template>
<v-row>
  <v-col span="4">
组件列表
  </v-col>
  <v-col span="20">
    <router-view></router-view>
  </v-col>
</v-row>
</template>
<script>
import { Layout } from 'atui'
export default {
  name: 'components',
  components: {
    vRow: Layout.Row,
    vCol: Layout.Col
  }
}
</script>
