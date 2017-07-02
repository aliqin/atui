<template>
  <div :class="btnClassObj"
       @click="clickBtnGroup">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ButtonGroup',
    props: {
      large: Boolean,
      small: Boolean,
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    methods: {
      clickBtnGroup (e) {
        e.cancelBubble = true
        let target = e.target
        let $parent = target.parentNode
        let $btns = $parent.getElementsByClassName(`${this.prefixCls}-btn`)
        let index = [].indexOf.call($btns, target)
        let len = $btns.length
        let oldClass = ''
        let newClass = ''
        for (let i = 0; i < len; i++) {
          oldClass = $btns[i].getAttribute('class')
          newClass = oldClass.replace('active', '')
          if (i === index) {
            newClass += ' active'
          }
          $btns[i].setAttribute('class', newClass)
        }
        this.$emit('switch', this, index)
      }
    },
    computed: {
      btnClassObj () {
        let { prefixCls, large, small } = this
        let btnClass = {}

        btnClass[prefixCls + '-btn-group'] = true
        btnClass[prefixCls + '-btn-large'] = large
        btnClass[prefixCls + '-btn-small'] = small

        return btnClass
      }
    }

  }
</script>
