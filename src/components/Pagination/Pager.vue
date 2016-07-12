<template>
    <ul :class="wrapClasses">
        <li v-for="page in pageRange" @click="pageClick(page.num)" :class="{
        'current':(page.className === 'current'),
        'pagination-item':true,
        'pagination-item-prev':(page.className==='prev'),
        'pagination-item-next':(page.className==='next'),
        'pagination-item-disabled':(page.className==='disabled'),
        'pagination-item-ellipsis':(page.className==='ellipsis'),
        'pagination-item-slash':(page.className==='slash')}" >
        <span v-if="page.className!='prev' && page.className!='next'">
          {{page.text}}
        </span>
        <icon v-if="page.className==='prev'" type="prev" size="12" color="#666" ></icon>
        <icon v-if="page.className==='next'" type="next" size="12" color="#666"></icon>
        <icon v-if="page.className==='disabled' && page.icon==='prev'" type="prev" size="12" color="#e6e6e6"></icon>
      <icon v-if="page.className==='disabled' && page.icon==='next'" type="next" size="12" color="#e6e6e6"></icon>
        </li>
    </ul>
</template>

<script>
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
      }
    },
    computed: {
      wrapClasses () {
        return {
          'pagination-items': !this.mini && !this.simple,
          'simple-pagination-items': this.simple && !this.mini,
          'mini-pagination-items': !this.simple && this.mini
        }
      }
    },
    components: {
      Icon
    }
  }
</script>
