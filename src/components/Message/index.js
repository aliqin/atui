import Message from './Message.vue'
import Vue from 'vue'


['info','success','error','warn','loading'].forEach((type,i) =>{
	Message[type] = function(content,duration,placement) {
    duration = duration || 3000
    placement = placement || 'center'
    if(!document.getElementsByClassName('vue-message').length) {
      let box = document.createElement('div')
      box.className = 'vue-message'
      document.body.appendChild(box)
    }
		let div = document.createElement('div')
  	document.getElementsByClassName('vue-message')[0].appendChild(div)
    new Vue({
      el:div,
      template:'<message class="vue-message-notice" :show.sync="show" :duration="duration" :type="type" width="400px" :placement="placement">{{content}}</message>',
      components:{
        Message:Message
      },
      data:{
        content:content,
        type:type,
        duration:duration,
        show:true,
        placement:placement
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
            let notice = document.getElementsByClassName('vue-message-notice')
            let element = notice[notice.length-1]
            document.getElementsByClassName('vue-message')[0].removeChild(element)
          },duration)
        }
      }
    })
	}

})

export default Message
