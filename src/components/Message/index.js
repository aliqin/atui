import Message from './Message.vue'
import Vue from 'vue'


['info','success','error','warn','loading'].forEach((type,i) =>{
	Message[type] = function(content,duration,placement) {
    duration = duration || 3000
    placement = placement || 'center'
    if(!document.getElementsByClassName('atui-message').length) {
      let box = document.createElement('div')
      box.className = 'atui-message'
      document.body.appendChild(box)
    }
		let div = document.createElement('div')
  	document.getElementsByClassName('atui-message')[0].appendChild(div)
    new Vue({
      el:div,
      template:'<message class="atui-message-notice" :show.sync="show" :duration="duration" :type="type" width="400px" :transition="transition">{{content}}</message>',
      components:{
        Message:Message
      },
      data:{
        content:content,
        type:type,
        duration:duration,
        show:true,
        placement:placement,
        transition:'movedown'
      },
      ready:function() {
        let me = this
        // me.content = content
        // me.type = type
        // me.show = true
        // me.duration = duration || me.duration
        // me.placement = placement || me.placement
        if(me.duration) {
          setTimeout(() => {
            me.transition = 'moveup'
            // let notice = document.getElementsByClassName('atui-message-notice')
            // let element = notice[notice.length-1]
            // document.getElementsByClassName('atui-message')[0].removeChild(element)
          },duration)
        }
      }
    })
	}

})

export default Message
