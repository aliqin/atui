<template>
	<span :class="[prefixCls + '-breadcrumb']">
		<a v-if="href"
       :href="href"
       :class="[prefixCls + '-breadcrumb-link']">
			<slot></slot>
		</a>
		<span v-else
          :class="[prefixCls + '-breadcrumb-link']">
			<slot></slot>
		</span>
		<span :class="[prefixCls + '-breadcrumb-slash']">{{ slash }}</span>
	</span>
</template>

<script type="text/babel">
export default {
  props: {
    href: String,
    slash: String,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  }
}
</script>
