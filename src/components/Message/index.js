import Message from './Message.vue'
import Vue from 'vue'

['info','success','error','warn','loading'].forEach((type,i) =>{
	Message[type] = function(cont,duar) {
		let $msg = document.getElementById('J_Component_message')
		let content,duration,show;
		if(!$msg) {
			const div = document.createElement('div')
	  		document.body.appendChild(div);
			$msg = document.createElement('message')
			$msg.id = 'J_Component_message'
			$msg.innerHTML = "{{content}}"
			$msg.setAttribute('showIcon','true')
			$msg.setAttribute('placement','top')
			$msg.setAttribute('dismissable','false')
			$msg.setAttribute(':content','content')
			$msg.setAttribute(':show','show')
			div.appendChild($msg)

			
			new Vue({
			  el: div,
			  components:{
			  	Message:Message
			  },
			  data: {
		    	content:'',
		    	duration:duration,
		    	show:show
			  }
			})
		}
		content = cont
		duration = duar
		show = true
	}
})

export default Message
