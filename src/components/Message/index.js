import Message from './Message.vue'
import Vue from 'vue'


['info','success','error','warning','loading'].forEach((type,i) =>{
	Message[type] = function(content,duration,placement) {
    duration = duration || 3000
    placement = placement || 'top'
    new Vue({
      template:'<message class="atui-message-notice" :show="show" :duration="duration" :type="type" :transition="transition" :placement="placement">{{content}}</message>',
      components:{
        Message:Message
      },
      data:{
        content:content,
        type:type,
        duration:duration,
        show:true,
        transition:'movedown',
        placement:placement
      },
      ready:function() {
        let me = this
        if(me.duration) {
          setTimeout(() => {
            me.$destroy(true)
          },duration)
        }
      }
    }).$mount().$appendTo('body')
	}

})

export default Message
