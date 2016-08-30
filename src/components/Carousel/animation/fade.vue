<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: {}
    }
  },
  props: {
    speed: String
  },
  methods: {
    animation (position, flag) {
      let me = this
      me.$dispatch('beforeChange', me)

      let length = this.items.length
      function fade (preview, next) {
        this.items[ preview ].style.opacity = 0
        this.items[ next ].style.opacity = 1
        setTimeout(() => {
          this.items[ preview ].style.zIndex = length
          this.items[ next ].style.zIndex = length + 1
        }, parseInt(this.speed) * 1000)
      }
      if (flag === 'preview') {
        if (position === length - 1) {
          fade.call(this, 0, position)
        } else {
          fade.call(this, position + 1, position)
        }
      } else if (flag === 'jump') {
        Array.prototype.forEach.call(this.items, (item, index) => {
          item.style.opacity = 0

          setTimeout(() => {
            item.style.zIndex = length
          }, parseInt(this.speed) * 1000)
        })

        this.items[ position ].style.opacity = 1
        setTimeout(() => {
          this.items[ position ].style.zIndex = length + 1
        }, parseInt(this.speed) * 1000)
      } else {
        if (position === 0) {
          fade.call(this, length - 1, position)
        } else {
          fade.call(this, position - 1, position)
        }
      }

      function endCall () {
        me.$el.removeEventListener('transitionend', endCall)
        me.$dispatch('afterChange', me)
      }
      me.$el.addEventListener('transitionend', endCall, false)
    },
    init () {
      let items = this.items = this.$el.children
      let length = items.length

      Array.prototype.forEach.call(items, (item, index) => {
        item.style.position = 'absolute'
        item.style.left = 0
        item.style.top = 0
        item.style.zIndex = length - index
        item.style.transition = `opacity ${this.speed}s`
        item.style.opacity = 0
      })
      items[ 0 ].style.opacity = 1
    }
  },

  ready () {
    this.init()
  }
}
</script>
