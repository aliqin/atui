<template>
    <div v-if="showSizeChanger" :class="[prefixCls + '-pagination-selector']">
        <v-select v-model="currSize" @change="change" style="width:100px">
            <v-option v-for="size in pageSizeOptions" :value="size" >{{size}} 条/页</v-option>
        </v-select>
        <div :class="[prefixCls + '-pagination-totalpage']">共{{ total }}条数据</div>
    </div>
</template>

<script>
  import vSelect from '../Select/'

  const vOption = vSelect.Option

  export default {
    name: 'Options',
    props: {
      total: {
        type: Number
      },
      defaultSize: {
        type: Number
      },
      pageSizeOptions: {
        type: Array,
        default () {
          return [10, 20, 30, 40]
        }
      },
      showSizeChanger: {
        type: Boolean
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    data () {
      return {
        currSize: this.defaultSize
      }
    },
    components: {
      vSelect, vOption
    },
    methods: {
      change (data) {
        this.$emit('pagination-size-change', data)
      }
    }
  }
</script>
