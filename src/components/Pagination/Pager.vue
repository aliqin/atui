<template>
    <ul :class="{'pagination-items':(!mini && !simple),
    			 'simple-pagination-items': (simple && !mini),
    			 'mini-pagination-items': (!simple && mini)}" >
        <li v-for="page in pageRange" @click="pageClick(page.num)" :class="{
        'current':(page.className==='current'),
        'pagination-item-prev':(page.className==='prev'),
        'pagination-item-next':(page.className==='next'),
        'pagination-item-disabled':(page.className==='disabled'),
        'pagination-item-ellipsis':(page.className==='ellipsis'),
        'pagination-item-slash':(page.className==='slash')}" class="pagination-item">
            {{page.text}}
        </li>
    </ul>
</template>

<script>
	export default {
		props: {
			simple: {
				type: Boolean,
				default: false
			},
			mini: {
				type: Boolean,
				default: false
			},
			pageRange: {
				type: Array,
				default: []
			},
			pageClick: {
				type: Function,
				default: () => {}
			}
		}
	}
</script>