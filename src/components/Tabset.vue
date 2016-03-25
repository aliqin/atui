<template>
  <div class="navWrapper">
    <!-- Nav tabs -->
     <ul :class="{
      'nav': true,
      'nav-tabs': (tabType === 'nav-tabs'),
      'nav-base': (tabType === 'base') }" role="tablist">
            <li 
                v-for="r in renderData"
                v-bind:class="{
                  'active': ($index === active),
                  'disabled': r.disabled
                }"
                @click.prevent="handleTabListClick($index, r)"
                :disabled="r.disabled"
            >
                <a href="#">{{{r.header}}}</a>
            </li>
     </ul>


     <!-- Tab panes -->
     <div class="tab-content" v-el:tab-content>
        <slot></slot>
     </div>
  </div>
</template>

<script>
  export default {
    props: {
      effect: {
        type: String,
        default: 'fadein'
      },
      active: {
        type: Number,
        default: 0
      },
      tabType: {
        type: String,
        default: 'nav-tabs'
      }
    },

    data() {
      return {
        renderData: []
      }
    },

    methods: {
        handleTabListClick(index, el) {
            if (!el.disabled) this.active = index
        }
    }
  }
</script>

<style lang="less" scoped>
  .navWrapper {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
  .nav-tabs {
    margin-bottom: 15px
  }
</style>
