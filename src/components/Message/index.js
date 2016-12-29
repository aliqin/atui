import Message from './Message.vue'

['info', 'success', 'error', 'warning', 'loading'].forEach((type, i) => {
  Message[type] = (content, duration = 3000, placement = 'top') => {
    let el = document.createElement('div')
    document.body.appendChild(el)
    let message = new Vue({
      el: el,
      template: `
        <transition :name="transition">
          <message class="atui-message-notice" v-if="show"
          :show="true"
          :duration="duration"
          :type="type"
          :transition="transition"
          :placement="placement"
          show-icon
          style="z-index:2000;">
          {{content}}
          </message>
        </transition>
        `,
      components: {
        Message: Message
      },
      data () {
        return {
          content: content,
          type: type,
          duration: duration,
          show: false,
          transition: 'movedown',
          placement: placement
        }
      },
      mounted () {
        let me = this
        me.$nextTick(function () {
          me.show = true
        })
        if (me.duration) {
          setTimeout(() => {
            me.show = false
            setTimeout(() => {
              me.$destroy()
              me.$el.parentNode.removeChild(me.$el)
            }, 1000)
          }, duration)
        }
      }
    })
    return message
  }
})

export default Message
