<template>
	<span class="breadcrumb">
		<a v-if="href" :href="href" class="breadcrumb-link">
			<slot></slot>
		</a>
		<span v-else class="breadcrumb-link">
			<slot></slot>
		</span>
		<span class="breadcrumb-slash">{{ slash }}</span>
	</span>
</template>

<script>
export default {
  props: {
    href: String,
    slash: String
  }
}
</script>
