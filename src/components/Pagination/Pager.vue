<template>
  <ul :class="pagerClassObj">
    <li v-for="page in pageRange"
        @click="pageClick(page.num)"
        :class="[prefixCls + '-pagination-item', page.className]" >
      <span v-if="page.className != prefixCls + '-pagination-item-prev' && page.className != prefixCls + '-pagination-item-next'">
        {{page.text}}
      </span>
      <icon v-if="page.className === prefixCls + '-pagination-item-prev'"
            type="prev"
            size="12"
            color="#666" ></icon>
      <icon v-if="page.className === prefixCls + '-pagination-item-next'"
            type="next"
            size="12"
            color="#666"></icon>
      <icon v-if="page.className === prefixCls + '-pagination-item-disabled' && page.icon === 'prev'"
            type="prev"
            size="12"
            color="#e6e6e6"></icon>
      <icon v-if="page.className === prefixCls + '-pagination-item-disabled' && page.icon==='next'"
            type="next"
            size="12"
            color="#e6e6e6"></icon>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Icon from '../Icon/'

  export default {
    props: {
      simple: {
        type: Boolean,
        default: false
      },
      mini: {
        type: Boolean,
        default: false
      },
      pageRange: {
        type: Array,
        default: []
      },
      pageClick: {
        type: Function,
        default: () => {}
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    computed: {
      pagerClassObj () {
        let { prefixCls, mini, simple } = this
        let classObj = {}

        classObj[prefixCls + '-pagination-items'] = !mini && !simple
        classObj[prefixCls + '-pagination-items-simple'] = simple && !mini
        classObj[prefixCls + '-pagination-items-mini'] = !simple && mini

        return classObj
      }
    },

    components: {
      Icon
    }
  }
</script>
