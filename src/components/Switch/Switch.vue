<template>
	<span :class="wrapClasses" @click="changeHandler">
		<span class="switch-content">
			<slot v-if="checked && !small" name="checkedPart"></slot>
			<slot v-if="!checked && !small" name="unCheckedPart"></slot>
		</span>
	</span>
</template>

<script>
	export default {
		props: {
			checked: {
				type: Boolean,
				default: false
			},
			onChange: {
				type: Function,
				default: () => {}
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			wrapClasses () {
				return {
					'switch'			: true,
					'switch-checked'	: this.checked,
					'switch-disabled'	: this.disabled
				}
			},
			small () {
				// 根据small参数来判断是否显示switch-content里面的两个slot,因为在小型switch里面承载不下超过12px大小的字体
				return this.$el.className.indexOf('small') > -1 ? true : false;
			}
		},
		methods: {
			changeHandler () {
				if(this.disabled) {
					return;
				}
				this.checked = !this.checked;
				this.onChange(this.checked);
			}
		}
	}	
</script>
