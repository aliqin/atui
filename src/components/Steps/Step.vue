<template>
	<div :class="wrapClasses" :style="{'width': tailWidth}">
		<div v-if="!lastStep" class="step-tail">
			<i>
				<i :style="{ backgroundColor: color }"></i>
			</i>
		</div>
		<div class="step-head">
			<div class="step-head-inner">
				<span v-if="status !== 'finish'" class="step-icon" 
					:style="{
						borderColor: status==='process'?color:'#e9e9e9', 
						backgroundColor: status==='process'?color:'#fff'}">
					{{ stepNumber }}
				</span>
				<span v-else class="step-finish-icon">
					<icon type="success" size="28" :color="color"></icon>
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
			tailWidth: String,
			color: String
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
