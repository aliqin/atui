<template>
	<div class="step" :class="{
		'step-status-process': (status === 'process'),
		'step-status-finish': (status === 'finish'),
		'step-status-wait': (status === 'wait'),
		'step-item-last': lastStep}" :style="{'width': tailWidth}">
		<div v-if="!lastStep" class="step-tail"><i></i></div>
		<div class="step-head">
			<div class="step-head-inner">
				<span v-if="status !== 'finish'" class="step-icon">{{ stepNumber }}</span>
				<span v-else class="step-finish-icon"></span>
			</div>
		</div>
		<div class="step-main">
			<div class="step-main-title">{{ title }}</div>
			<div class="step-main-description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			description: String,
			status: String,
			stepNumber: Number,
			lastStep: Boolean,
			tailWidth: String
		}
	}
</script>