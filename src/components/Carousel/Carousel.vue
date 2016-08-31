<template>
  <div :class="[prefixCls + '-carousel']"
       :style="{ width: width, height: height }"
       @mouseover="stop"
       @mouseout="resume">
    <component :is="animation"
               :style="{ transition: 'all ' + thisSpeed + 's' }"
               :speed="thisSpeed"
               :class="[prefixCls + '-carousel-content']"
               v-ref:content>
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
         v-if="indicators !== false"
         @click.stop>
      <i :class="[prefixCls + '-carousel-indicator-icon' ,{ 'carousel-indicator-active': posFlag === $index }]"
         v-for="i in childrenArr"
         @click="jump2($index)"></i>
    </div>
  </div>
</template>

<script>
  import { normal, fade } from './animation'
  export default {
    data () {
      return {
        posFlag: 0,
        childrenArr: [],
        childrenLength: 0
      }
    },
    props: {
      width: {
        type: String,
        default: 'auto'
      },
      height: {
        type: String,
        default: '400px'
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
            if (me.posFlag < me.$children.length - 2) {
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
            if (me.autoPlay && me.$children.length > 2) {
              me.timer = setTimer()
            }
          }
        }
      },
      stop () {
        console.log('stop')
        clearInterval(this.timer)
      },
      resume () {
        this.play()
      },
      next () {
        let content = this.$refs.content
        if (this.posFlag < this.$children.length - 2) {
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
          this.posFlag = this.$children.length - 2
        }
        content.animation(this.posFlag, 'preview')
        this.play()
      },
      jump2 (index) {
        let content = this.$refs.content
        content.animation(index, 'jump')
        this.posFlag = index
        this.play()
      }
    },
    events: {
      scaleSliderWidth (fn) {
        let _this = this
        fn(this.$el.clientWidth, this.$children.length - 1)
        // For addChildrenLength()
        this.scaleSliderWidth = function () {
          fn(_this.$el.clientWidth, _this.$children.length - 1)
        }
      },
      addChildrenLength () {
        this.childrenLength++
        this.childrenArr.push(this.childrenArr.length)
        if (this.animation === 'normal') {
          this.scaleSliderWidth()
        }
        this.play()
      },
      scaleItemsWidth (fn) {
        fn(this.$el.clientWidth)
      },
      beforeChange () {
        return true
      },
      afterChange () {
        return true
      }
    },
    ready () {
      // Init play function.
      this.play = this.play()
      this.play()
    },
    components: {
      normal,
      fade
    }
  }
</script>
