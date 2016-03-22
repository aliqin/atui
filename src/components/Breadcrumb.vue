<template>
<div class="breadcrumbs">
  <slot></slot>
</div>
</template>

<script>
	export default {
		props: {
			slash: {
				type: String,
				default: '/'
			}
		},
		methods: {
			mapPropsToChildComponent () {
				const self = this;
				self.$children.forEach((child, index) => {
					child.slash = self.slash
				})
			}
		},
		ready () {
			this.mapPropsToChildComponent();
		}
	}
</script>
