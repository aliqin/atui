<template>
    <ul :class="{'pagination-items':(!mini && !simple),
    			 'simple-pagination-items': (simple && !mini),
    			 'mini-pagination-items': (!simple && mini)}" >
        <li v-for="page in pageRange" @click="pageClick(page.num)" :class="{
        'current':(page.className==='current'),
		'pagination-item':true,
        'pagination-item-prev':(page.className==='prev'),
        'pagination-item-next':(page.className==='next'),
        'pagination-item-disabled':(page.className==='disabled'),
        'pagination-item-ellipsis':(page.className==='ellipsis'),
        'pagination-item-slash':(page.className==='slash')}">
    		<span v-if="page.className!='prev' && page.className!='next'">
    			{{page.text}}
    		</span>
    		<icon v-if="page.className==='prev'" type="prev" size="12" color="#666" ></icon>
    		<icon v-if="page.className==='next'" type="next" size="12" color="#666"></icon>
        </li>
    </ul>
</template>

<script>
	import Icon from '../Icon/'
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
		},
		components: {
			Icon
		}
	}
</script>