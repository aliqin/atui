<template>
  <div :class="[prefixCls + '-carousel']"
       :style="{ width: width, height: height }">
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
      auto: {
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
      autoplay () {
        let timer
        // Get animation's vm
        let content = this.$refs.content
        let _this = this
        function setTimer () {
          return setInterval(() => {
            if (_this.posFlag < _this.$children.length - 2) {
              _this.posFlag++
            } else {
              _this.posFlag = 0
            }

            content.animation(_this.posFlag)
          }, _this.interval)
        }
        return function () {
          if (timer) {
            clearInterval(timer)
            timer = setTimer()
          } else {
            // Config autoplay & carousel item large than 2, coz carousel is one of items
            if (_this.auto && _this.$children.length > 2) {
              timer = setTimer()
            }
          }
        }
      },
      next () {
        let content = this.$refs.content
        if (this.posFlag < this.$children.length - 2) {
          ++this.posFlag
        } else {
          this.posFlag = 0
        }
        content.animation(this.posFlag)
        // Clean the Timer, reset autoplay's interval time.
        this.autoplay()
      },
      preview () {
        let content = this.$refs.content

        if (this.posFlag > 0) {
          --this.posFlag
        } else {
          this.posFlag = this.$children.length - 2
        }
        content.animation(this.posFlag, 'preview')
        this.autoplay()
      },
      jump2 (index) {
        let content = this.$refs.content
        content.animation(index, 'jump')
        this.posFlag = index
        this.autoplay()
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
        this.autoplay()
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
      // Init autoplay function.
      this.autoplay = this.autoplay()
      this.autoplay()
    },
    components: {
      normal,
      fade
    }
  }
</script>
