<template>
	<div v-if="quickGo" class="pagination-jump">
	    <div class="input-jumper-wrap">
		    跳至
		    <input type="text" :value="_current" @change="_handleChange($event)" :class="{
		    	'input-jumper': (!mini),
		    	'mini-input-jumper': mini}"/>
		    页
	    </div>
	  	<button type="button" class="btn tertiary" @click="_go" :class="{
			'default': (!mini),
			'small': mini}">
		跳转</button>
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
			},
			mini: {
				type: Boolean,
				default: false
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

</style>