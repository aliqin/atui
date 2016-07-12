<template>
    <div v-if="showSizeChanger" :class="[prefixCls + '-pagination-selector']">
        <v-select :value="defaultSize" @change="change">
            <v-option value="10">10 条/页</v-option>
            <v-option value="20">20 条/页</v-option>
            <v-option value="30">30 条/页</v-option>
            <v-option value="40">40 条/页</v-option>
        </v-select>
        <div :class="[prefixCls + '-pagination-totalpage']">共{{ total }}条数据</div>
    </div>
</template>

<script>
  import vSelect from '../Select/'

  const vOption = vSelect.Option

  export default {
    props: {
      total: {
        type: Number
      },
      defaultSize: {
        type: Number
      },
      showSizeChanger: {
        type: Boolean
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    components: {
      vSelect, vOption
    },

    methods: {
      change (data) {
        this.$dispatch('pagination-size-change', data)
      }
    }
  }
</script>
