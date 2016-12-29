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
		<span :class="[prefixCls + '-breadcrumb-symbol']">{{ symbol }}</span>
	</span>
</template>

<script type="text/babel">
export default {
  name: 'BreadcrumbItem',
  props: {
    href: String,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      symbol: '/'
    }
  }
}
</script>
