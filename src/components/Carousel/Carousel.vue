<template>
<div :class="[prefixCls + '-carousel']" data-ride="carousel">
  <!-- Indicators -->
  <ol :class="[prefixCls + '-carousel-indicators']" v-show="indicators">
    <li v-for="i in indicator" @click="indicatorClick($index)" :class="{active:$index === index}"><span></span></li>
  </ol>
  <!-- Wrapper for slides -->
  <div :class="[prefixCls + '-carousel-inner']" role="listbox">
    <slot></slot>
  </div>
  <!-- Controls -->
  <div v-show="controls" :class="[prefixCls + '-carousel-controls','hidden-xs']">
    <a :class="[prefixCls + '-carousel-control','left']" role="button" @click="prev">
      <icon type="prev"></icon>
    </a>
    <a :class="[prefixCls + '-carousel-control','right']" role="button" @click="next">
      <icon type="next"></icon>
    </a>
  </div>
</div>
</template>

<script>
import Icon from '../Icon'
export default {
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  components: {
    Icon
  },
  data () {
    return {
      indicator: [],
      index: 0,
      isAnimating: false
    }
  },
  computed: {
    slider () {
      return this.$el.querySelectorAll('.carousel-item')
    }
  },
  watch: {
    index (newVal, oldVal) {
      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)
    }
  },
  methods: {
    indicatorClick (index) {
      if (this.isAnimating || this.index === index) return false
      this.isAnimating = true
      this.index = index
    },
    slide (direction, next, prev) {
      let me = this
      const selected = this.slider[next]
      const className = direction === 'left' ? 'next' : 'prev'
      Vue.util.addClass(selected, className)
      // request property that requires layout to force a layout
      selected.clientHeight
      Vue.util.addClass(this.slider[prev], direction)
      Vue.util.addClass(selected, direction)

      let transFun = () => {
        me.slider.forEach((item) => {
          item.className = 'carousel-item'
          item.removeEventListener('transitionend', transFun)
        })
        Vue.util.addClass(selected, 'active')
        this.isAnimating = false
        this.$dispatch('slide', this.index, this)
      }
      this.slider[prev].addEventListener('transitionend', transFun, false)
      selected.addEventListener('transitionend', transFun, false)
    },
    next () {
      if (this.isAnimating) return false
      this.isAnimating = true
      this.index + 1 < this.slider.length ? this.index += 1 : this.index = 0
      this.$dispatch('slide', this.index, this)
    },
    prev () {
      if (this.isAnimating) return false
      this.isAnimating = true
      this.index === 0 ? this.index = this.slider.length - 1 : this.index -= 1
      this.$dispatch('slide', this.index, this)
    }
  },
  ready () {
    if (this.interval > 0) {
      let intervalID = null
      const intervalManager = () => {
        intervalID = setInterval(this.next, this.interval)
      }
      this.$el.onmouseenter = () => {
        clearInterval(intervalID)
      }
      this.$el.onmouseleave = () => {
        intervalManager()
      }
      intervalManager()
    }
  }
}
</script>
