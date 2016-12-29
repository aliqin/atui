<template>
  <div :id="sliderId" :class="sliderClassObj" @click="clickFun">
    <template v-for="(item, index) in valuePercent">
      <tooltip :content="valueArray[index]">
        <div :class="[prefixCls + '-slider-handle']" :style="{'left': item+'%'}" @mousedown="mousedown"></div>
      </tooltip>
    </template>
    <template v-if="valuePercent.length == 1">
      <!--<tooltip :content="valueArray[0]">-->
        <div :class="[prefixCls + '-slider-track']" :style="{'visibility': 'visible', 'left': '0%', 'width': valuePercent[0]+'%'}"></div>
      <!--</tooltip>-->
    </template>
    <template v-if="valuePercent.length > 1">
      <div :class="[prefixCls + '-slider-track']" :style="{'visibility': 'visible', 'left': valuePercent[0]+'%', 'width': valuePercent[1]-valuePercent[0]+'%'}"></div>
    </template>
    <div :class="[prefixCls + '-slider-step']"></div>
    <div :class="[prefixCls + '-slider-mark']"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tooltip from '../Tooltip/'
  import EventListener from '../_utils/EventListener'

  export default {
    name: 'Slider',
    props: {
      // 默认值/初识位置，也可实时获取最新值
      value: [String, Number, Array],
      // 不可用状态
      disabled: null,
      // 区间，最小值
      min: [String, Number],
      // 区间，最大值
      max: [String, Number],
      // 分段式滑块配置
      marks: Object,
      // 不同标记间的关系，默认为包含关系，false表示是并列关系
      included: {
        type: Boolean,
        default: true
      },
      // 每步的步数，如果为0，则只能到marks标记位置
      step: [String, Number],
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },

    data () {
      return {
        currValue: this.value,
        minValue: this.min,
        maxValue: this.max,
        width: '',
        valueArray: [],
        valuePercent: [],
        dragging: false
      }
    },

    components: {
      Tooltip
    },

    watch: {
      value (val) {
        this.currValue = val
      },
      currValue (val) {
        this.valueArray = this.valueToArray()
        this.$emit('input', val)
      },
      valueArray (val) {
        if (val.length === 1) {
          this.currValue = val[0] + ''
        }
      }
    },

    computed: {
      /**
       * 取值区间差
       */
      range () {
        // let min = this.min
        // let max = this.max
        this.minValue = this.minValue || 0
        this.maxValue = this.maxValue || 100
        if (this.maxValue - this.minValue < 0) {
          let mid = this.minValue
          this.minValue = this.maxValue
          this.maxValue = mid
        }
        return this.maxValue - this.minValue
      },
      /**
       * 每个取值单位所占总长度的比例
       */
      unit () {
        return Math.round(100 / this.range)
      },
      isDisabled () {
        return this.disabled
      },
      sliderClassObj () {
        let { prefixCls, disabled } = this
        let classObj = {}

        classObj[prefixCls + '-slider'] = true
        classObj[prefixCls + '-slider-disabled'] = disabled

        return classObj
      },
      sliderId () {
        return this.id || ('slider' + new Date().getTime())
      }
    },

    mounted () {
      let self = this

      setTimeout(() => {
        self.wrapper = self.getWrapperElement(self.sliderId)
        self.sliderWidth = self.wrapper.getBoundingClientRect().width
        self.wrapperLeft = self.wrapper.getBoundingClientRect().left

        self.valueArray = this.valueToArray()
      }, 0)

      EventListener.listen(document, 'mousemove', (e) => {
        self.mousemove(e)
      })

      EventListener.listen(document, 'mouseup', (e) => {
        self.mouseup(e)
      })
    },

    methods: {
      /**
       * 组件配置数据统一转Array
       * 且最多只能配置两个取值数据
       */
      valueToArray () {
        let value = this.currValue.toString().replace(/[\]\[]/g, '')
        let typeData = value.replace(/,/g, '')
        let unit = this.unit
        let min = this.minValue || 0
        let valueArray = []
        let valuePercent = []

        if (typeData - 0 >= 0) {
          valueArray = value.split(',')
          valueArray.sort()

          // 最多只能配置两个数据
          if (valueArray.length > 2) valueArray.length = 2

          // 取值不能超过区间
          for (let i = 0; i < valueArray.length; i++) {
            valueArray[i] = this.valueRange(valueArray[i])
            valuePercent.push((valueArray[i] - min) * unit)
          }
        } else {
          console.error('配置数据格式出错，请配置数字、数字型字符串、数字型数组、数字型数组字符串类型')
          valueArray = [0]
          valuePercent = [0]
        }
        this.valuePercent = valuePercent
        return valueArray
      },

      valueRange (value) {
        let min = this.minValue
        let max = this.maxValue

        if (min && min - 0 >= 0 && value < min) value = min
        if (!min && value < 0) value = 0

        if (max && max - 0 >= 0 && value > max) value = max
        if (!max && value > 100) value = 100

        return value
      },

      /**
       * slider组件初始化回调
       * @param  {[type]} value [description]
       * @return {[type]}       [description]
       */
      sliderStartCallBack (value) {
        this.$emit('start', value, this)
      },

      getWrapperElement (wrapper) {
        return document.getElementById(wrapper)
      },

      clickFun (e) {
        this.dragging = false
        this.preventEventDefaults(e)
        this.stopEventPropagation(e)
        if (!this.isDisabled) {
          this.change(e)
          this.dragging = false
        }
      },

      change (e) {
        let sliderWidth = this.sliderWidth
        let clickLocal = e.x + document.body.scrollLeft
        let wrapperLeft = this.wrapperLeft
        let range = this.range
        let unit = this.unit
        let clickRate = Math.round((clickLocal - wrapperLeft) / sliderWidth * range * unit)
        let min = this.minValue || 0
        let max = this.maxValue || 100
        let clickValue = Math.round((clickLocal - wrapperLeft) / sliderWidth * range) + min
        let valueArray = this.valueArray
        let valuePercent = this.valuePercent
        let len = valueArray.length

        if (clickRate < 0) clickRate = 0
        if (clickRate > 100) clickRate = 100
        if (clickValue < min) clickValue = min
        if (clickValue > max) clickValue = max

        if (len > 1) {
          if (clickRate - 0 >= valuePercent[1] - 0) {
            valuePercent[1] = clickRate
            valueArray[1] = clickValue
          } else if (clickRate - 0 >= valuePercent[0] - 0) {
            if (valuePercent[1] - clickRate < clickRate - valuePercent[0]) {
              valuePercent[1] = clickRate
              valueArray[1] = clickValue
            } else if (valuePercent[1] - clickRate > clickRate - valuePercent[0]) {
              valuePercent[0] = clickRate
              valueArray[0] = clickValue
            }
          } else {
            valuePercent[0] = clickRate
            valueArray[0] = clickValue
          }
        } else {
          valuePercent[0] = clickRate
          valueArray[0] = clickValue
        }

        this.valueArray = valueArray.reverse().reverse()
        this.valuePercent = valuePercent.reverse().reverse()

        this.$emit('change', this.valueArray, this)
      },

      preventEventDefaults (e) {
        if (!e) {
          e = window.event
        }
        if (e.preventDefault) {
          e.preventDefault()
        }
        e.returnValue = false
      },

      stopEventPropagation (e) {
        if (!e) {
          e = window.event
        }
        if (e.stopPropagation) {
          e.stopPropagation()
        }
        e.cancelBubble = true
      },

      mousedown (e) {
        if (!this.isDisabled) {
          this.handler = e.target
          this.preventEventDefaults(e)
          this.stopEventPropagation(e)
          this.dragging = true
        }
      },

      mousemove (e) {
        if (!this.isDisabled && this.dragging) {
          this.change(e)
        }
      },

      mouseup (e) {
        if (this.dragging) {
          this.dragging = false
          this.$emit('afterChange', this.valueArray, this)
        }
      }
    }
  }
</script>
