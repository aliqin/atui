<template>
    <div v-if="showSizeChanger" class="pagination-selector">
        <v-select :value.sync="single" :placeholder="placeholder">
            <v-option value="10">10 条/页</v-option>
            <v-option value="20">20 条/页</v-option>
            <v-option value="30">30 条/页</v-option>
            <v-option value="40">40 条/页</v-option>
        </v-select>
        <div class="pagination-totalpage">共{{ total }}条数据</div>
    </div>
</template>

<script>
	import vSelect from '../Select.vue'
	import vOption from '../Option.vue'
	export default {
		props: {
			total: {
				type: Number
			},
			single: {
				type: Array,
				default: []
			},
			placeholder: {
				type: String
			},
			showSizeChanger: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				single: ['10']
			}
		},
		components: {
			vSelect, vOption
		}
	}
</script>