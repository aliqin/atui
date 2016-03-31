<template>
	<div :class="wrapClasses" :style="{'width': tailWidth}">
		<div v-if="!lastStep" class="step-tail"><i></i></div>
		<div class="step-head">
			<div class="step-head-inner">
				<span v-if="status !== 'finish'" class="step-icon">
					{{ stepNumber }}
				</span>
				<span v-else class="step-finish-icon">
					<icon type="tick" color="#2db7f5" size="20"></icon>
				</span>
			</div>
		</div>
		<div class="step-main">
			<div class="step-main-title">{{ title }}</div>
			<div class="step-main-description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
	import Icon from '../Icon/'
	export default {
		props: {
			title: String,
			description: String,
			status: String,
			stepNumber: Number,
			lastStep: Boolean,
			tailWidth: String
		},
		computed: {
			wrapClasses () {
				return {
					'step': true,
					'step-status-process': this.status === 'process',
					'step-status-finish': this.status === 'finish',
					'step-status-wait': this.status === 'wait',
					'step-item-last': this.lastStep
				}
			}
		},
		components: {
			Icon
		}
	}
</script>