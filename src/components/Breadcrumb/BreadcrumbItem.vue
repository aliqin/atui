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

<script>
export default {
  props: {
    href: String,
    slash: String
  },
  data () {
    return {
      prefixCls: 'atui'
    }
  }
}
</script>
