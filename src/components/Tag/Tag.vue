<template>
	<div v-if="!closed" :class="wrapClasses">
		<a :href="href" class="tag-text"><slot></slot></a>
		<span v-if="closable" class="tag-close" @click="closeHandler">
			<icon type="close" size="12"></icon>
		</span>
	</div>
</template>

<script>
	import Icon from '../Icon/'
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

		computed: {
			wrapClasses() {
				return {
					'tag':		true,
				    'tag-green':this.color === 'green',
				    'tag-orange':this.color === 'orange',
				    'tag-red':this.color == 'red'
				}
			}
		},

		methods: {
			closeHandler (e) {
				this.closed = true;				
				this.onClose.call(this, e)
			}
		},

		components: {
			Icon
		}
	}
</script>



