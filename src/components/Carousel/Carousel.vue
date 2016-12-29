<template>
  <div :class="[prefixCls + '-carousel']"
       :style="{ width: width, height: height }"
       @mouseover="stop"
       @mouseout="resume">
    <component :is="animation"
               :style="{ transition: 'all ' + thisSpeed + 's' }"
               :speed="thisSpeed"
               :class="[prefixCls + '-carousel-content']"
               ref="content">
      <slot></slot>
    </component>

    <div :class="[prefixCls + '-carousel-btn', prefixCls + '-carousel-left-btn']"
         @click.stop="preview"
         v-if="controlBtn">
      <i :class="[prefixCls + '-carousel-icon', prefixCls + '-carousel-icon-left']"></i>
    </div>
    <div :class="[prefixCls + '-carousel-btn', prefixCls + '-carousel-right-btn']"
         @click.stop="next"
         v-if="controlBtn">
      <i :class="[prefixCls + '-carousel-icon', prefixCls + '-carousel-icon-right']"></i>
    </div>

    <div :class="[prefixCls + '-carousel-indicators',indicatorClass]"
         v-if="indicators !== false && childrenLength > 1"
         @click.stop>
      <i v-for="(item, index) in childrenLength" :class="[prefixCls + '-carousel-indicator-icon' ,{ 'carousel-indicator-active': posFlag === index }]" @click="jump2(index)"></i>
    </div>
  </div>
</template>

<script>
  import { normal, fade } from './animation'
  export default {
    name: 'Carousel',
    data () {
      return {
        posFlag: 0,
        childrenLength: 0
      }
    },
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      interval: {
        type: Number,
        default: 3000
      },
      speed: {
        type: Number,
        default: 500
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      hoverStop: {
        type: Boolean
      },
      indicators: {
        default: 'center'
      },
      controlBtn: {
        type: Boolean
      },
      animation: {
        type: String,
        default: 'normal'
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    components: {
      normal,
      fade
    },
    computed: {
      thisSpeed () {
        let speed = this.speed / 1000
        return speed.toFixed(2)
      },
      indicatorClass () {
        if (this.indicators) {
          return `${this.prefixCls}-carousel-${this.indicators}`
        }
      }
    },
    methods: {
      play () {
        // let timer
        // Get animation's vm
        let content = this.$refs.content
        let me = this
        function setTimer () {
          return setInterval(() => {
            if (me.posFlag < me.childrenLength - 1) {
              me.posFlag++
            } else {
              me.posFlag = 0
            }
            content.animation(me.posFlag)
          }, me.interval)
        }
        return function () {
          if (me.timer) {
            clearInterval(me.timer)
            me.timer = setTimer()
          } else {
            // Config play & carousel item large than 2, coz carousel is one of items
            if (me.autoPlay && me.childrenLength > 2) {
              me.timer = setTimer()
            }
          }
        }
      },
      stop () {
        if (this.hoverStop) {
          clearInterval(this.timer)
        }
      },
      resume () {
        if (this.hoverStop) {
          this.play()
        }
      },
      next () {
        let content = this.$refs.content
        if (this.posFlag < this.childrenLength - 1) {
          ++this.posFlag
        } else {
          this.posFlag = 0
        }
        content.animation(this.posFlag)
        // Clean the Timer, reset play's interval time.
        this.play()
      },
      preview () {
        let content = this.$refs.content

        if (this.posFlag > 0) {
          --this.posFlag
        } else {
          this.posFlag = this.childrenLength - 2
        }
        content.animation(this.posFlag, 'preview')
        this.play()
      },
      jump2 (index) {
        let content = this.$refs.content
        content.animation(index, 'jump')
        this.posFlag = index
        this.play()
      },
      newItem (item) {
        const sliderContent = this.$refs.content
        this.addChildrenLength()
        this.scaleItemsWidth(item)
        if (sliderContent.scaleWidth) {
          sliderContent.scaleWidth(this.$el.clientWidth)
        }
        this.autoplay()
      }
    },
    mounted () {
      let me = this
      me.$nextTick(() => {
        me.play = me.play()
        me.$el.clentHight
        me.play()
      })
      me.$on('scaleSliderWidth', (fn) => {
        fn(me.$el.clientWidth, me.childrenLength)
        // For addChildrenLength()
        me.scaleSliderWidth = () => {
          fn(me.$el.clientWidth, me.childrenLength)
        }
      }).$on('addItem', () => {
        me.childrenLength++
        if (this.animation === 'normal') {
          me.$nextTick(() => {
            me.scaleSliderWidth()
          })
        }
        me.play()
      }).$on('scaleItemsWidth', (fn) => {
        fn(me.$el.clientWidth)
      }).$on('before', (item) => {
        me.$emit('before-change', item)
      }).$on('after', (item) => {
        me.$emit('after-change', item)
      })
    },
    beforeDestroy: function () {
      this.$off()
    }
  }
</script>
