<template>
	<div v-if="!closed" :class="{
	  'tag':		true,
      'tag-green':(color == 'green'),
      'tag-orange':(color == 'orange'),
      'tag-red':(color == 'red')}" >
		<a :href="href" class="tag-text"><slot></slot></a>
		<i v-if="closable" class="tag-close" @click="closeHandler">x</i>
	</div>
</template>

<script>
	export default {
		props: {
			color: {
				type: String
			},
			closable: {
				type: Boolean,
				default: false
			},
			href: {
				type: String
			},
			onClose: {
				type: Function,
				default: () => {}
			}
		},

		data () {
			return {
				closed: false
			}
		},

		methods: {
			closeHandler (e) {
				this.closed = true;				
				this.onClose.call(this, e)
			}
		}
	}
</script>



