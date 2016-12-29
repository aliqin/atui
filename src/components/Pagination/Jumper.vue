<template>
  <div v-if="quickGo" :class="[prefixCls + '-pagination-jump']">
      <div :class="[prefixCls + '-pagination-jumper-wrap']">
        跳至
        <input type="text" :value="_current" @change="_handleChange($event)" :class="inputClassObj"/>
        页
      </div>
      <button type="button" @click="_go" :class="btnClassObj">
    跳转</button>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'Jumper',
  props: {
    quickGo: {
      type: Function,
      default: () => {}
    },
    currPage: {
      type: Number
    },
    totalPage: {
      type: Number
    },
    mini: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  created () {
    this._current = this.currPage
  },
  computed: {
    inputClassObj () {
      let { prefixCls, mini } = this
      let classObj = {}

      classObj[prefixCls + '-pagination-input-jumper'] = !mini
      classObj[prefixCls + '-pagination-mini-input'] = mini

      return classObj
    },
    btnClassObj () {
      let { prefixCls, mini } = this
      let classObj = {}

      classObj[prefixCls + '-btn'] = true
      classObj[prefixCls + '-btn-tertiary'] = true
      classObj[prefixCls + '-btn-default'] = !mini
      classObj[prefixCls + '-btn-small'] = mini

      return classObj
    }
  },
  data () {
    return {
      _current: null
    }
  },
  methods: {
    _handleChange (e) {
      let val = e.target.value
      if (Number(val) > this.totalPage) {
        this._current = this.totalPage
        return
      }
      this._current = e.target.value
    },
    _go (e) {
      if (this._current === '') {
        return
      }
      let val = Number(this._current)
      if (isNaN(val)) {
        val = this.currPage
      }
      const c = this.quickGo(val)
      this._current = c
    }
  }
}
</script>
