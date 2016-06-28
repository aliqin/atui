<style lang="less">

</style>
<template>
<v-row>
  <v-col span="4">col-lg-23</v-col>
  <v-col span="20">1</v-col>
</v-row>
</template>
<script>
import { Layout } from atui
export default {
  name: 'components',
  components: {
    vRow: Layout.Row,
    vCol: Layout.Col
  }
}
</script>
