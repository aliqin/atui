import Message from './Message.vue'

['info', 'success', 'error', 'warning', 'loading'].forEach((type, i) => {
  Message[type] = (content, duration, placement) => {
    duration = duration || 3000
    placement = placement || 'top'
    new Vue({
      template: `
        <message class="atui-message-notice"
        :show="show"
        :duration="duration"
        :type="type"
        :transition="transition"
        :placement="placement"
        show-icon
        style="z-index:2000;">
        {{content}}
        </message>
        `,
      components: {
        Message: Message
      },
      data: {
        content: content,
        type: type,
        duration: duration,
        show: true,
        transition: 'movedown',
        placement: placement
      },
      ready () {
        let me = this
        if (me.duration) {
          setTimeout(() => {
            me.$destroy(true)
          }, duration)
        }
      }
    }).$mount().$appendTo(document.body)
  }
})

export default Message
