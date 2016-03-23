<template>
	<div v-if="quickGo"  title="Quick jump to page" class="pagination-jump">
    跳至
    <input type="text" :value="_current" @change="_handleChange($event)" class="input-jumper"/>
    页
  	<button type="button" class="btn default tertiary btn-jumper" @click="_go">跳转</button>
  	</div>

</template>

<script>
	export default {
		props: {
			quickGo: {
				type: Function,
				default: ()=>{}
			},
			currPage: {
				type: Number
			},
			totalPage: {
				type: Number
			}
		},

		compiled () {
			this._current = this.currPage
		},

		data () {
			return {
				_current: null
			}
		},

		methods: {
		    _handleChange (e) {
		    	let val = e.target.value
		    	if(Number(val) > this.totalPage) {
		    		this._current = this.totalPage
		    		return
		    	}
		      	this._current = e.target.value
		    },

		    _go (e) {
		    	if(this._current === '') {
		    		return
		    	}

		    	let val = Number(this._current)
		    	if(isNaN(val)) {
		    		val = this.currPage;
		    	}
		    	const c = this.quickGo(val)
		    	this.currPage = c
		    	this._current = c

		    }
		}
	}
</script>

<style lang="less">
	.input-jumper {
		width: 38px;
		border: 1px solid #d9d9d9;
		background: #fff;
		border-radius: 4px;
		height: 28px;
	}
</style>