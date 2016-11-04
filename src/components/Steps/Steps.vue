<template>
  <div :class="[prefixCls + '-steps']">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      current: {
        type: Number,
        default: 0
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    watch: {
      current () {
        this.mapPropsToChildComponent()
      }
    },
    data () {
      return {
        itemsWidth: [],
        previousStepsWidth: '',
        isDisplayNone: false
      }
    },
    methods: {
      // 将一些属性props映射到Component 比如当前的步骤数，是否是最后一个item
      mapPropsToChildComponent () {
        const self = this
        const len = this.$children.length - 1

        this.$children.forEach((child, index) => {
          child.stepNumber = (index + 1).toString()
          child.lastStep = index === len
          child.color = self.color

          if (index === self.current) {
            child.status = 'process'
          } else if (index < self.current) {
            child.status = 'finish'
          } else {
            child.status = 'wait'
          }
        })
      },

      _handleTailWidth () {
        const self = this
        const dom = self.$el
        const len = dom.children.length - 1
        this.itemsWidth = new Array(len + 1)

        // 将display为none的steps组件设为block，方便获取宽度，同时对其opacity设置为0
        self._setStyleByDisplay()

        let i = 0
        for (; i <= len - 1; i++) {
          const _item = this.$el.children[i].children
          this.itemsWidth[i] = Math.ceil(_item[0].offsetWidth + _item[1].children[0].offsetWidth)
        }
        this.itemsWidth[i] = Math.ceil(this.$el.children[len].offsetWidth)

        this.previousStepsWidth = Math.floor(this.$el.offsetWidth)
        this._update()

        // this.$el.children[len].style.position = 'absolute'

        // 算出tailWidth, 动态更新子组件
        this.$children.forEach((child, index) => {
          child.tailWidth = (self.itemsWidth.length === 0 || index === len) ? 'auto' : self.itemsWidth[index] + self.tailWidth + 'px'
        })

        // 恢复steps默认样式
        self._recoverDefaultStyle()
      },

      _update () {
        const len = this.$children.length - 1
        let tw = 0
        this.itemsWidth.forEach((w) => {
          tw += w
        })
        const dw = Math.floor((this.previousStepsWidth - tw) / len) * 0.6 - 1
        if (dw <= 0) {
          return
        }
        this.tailWidth = dw
      },

      _setStyleByDisplay () {
        let self = this
        let style = self.$el.style
        let display = self._getStyle(this.$el, 'display')

        if (display === 'none' && !self.isDisplayNone) {
          style.display = 'block'
          style.opacity = 0
          self.isDisplayNone = true
        }
      },

      _recoverDefaultStyle () {
        let self = this
        let style = self.$el.style

        if (self.isDisplayNone) {
          style.display = 'none'
          style.opacity = 1
          self.isDisplayNone = false
        }
      },

      _getStyle (elem, name) {
        if (elem.style[name]) {
          return elem.style[name]
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
          name = name.replace(/([A-Z])/g, '-$1')
          name = name.toLowerCase()

          let s = document.defaultView.getComputedStyle(elem, '')
          return s && s.getPropertyValue(name)
        } else {
          return null
        }
      },

      resize () {
        const w = Math.floor(this.$el.offsetWidth)
        if (this.previousStepsWidth === w) {
          return
        }
        this.previousStepsWidth = w
        this._update()
      }
    },
    ready () {
      this.mapPropsToChildComponent()

      setTimeout(() => {
        this._handleTailWidth()
      }, 30)
    }
  }
</script>
