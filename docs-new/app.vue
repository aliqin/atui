<style lang="less"></style>
<template>
<div class="docs-app">
  <docs-nav></docs-nav>
  <router-view>

  </router-view>
</div>
</template>
<script>
import docsNav from './widget/docs-nav.vue'
export default {
  name: 'components',
  components: {
    docsNav
  }
}
</script>
