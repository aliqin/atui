<template>
	<div class="steps">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
        default: "#ff7500"
			}
		},
		watch: {
			current () {
				this.mapPropsToChildComponent();
			}
		},
		data () {
			return {
				itemsWidth: [],
				previousStepsWidth: ''
			}
		},
		methods: {
			// 将一些属性props映射到Component 比如当前的步骤数，是否是最后一个item
			mapPropsToChildComponent () {
				const self = this;
				const len = this.$children.length - 1;

				this.$children.forEach((child, index) => {
					child.stepNumber = (index + 1).toString();
					child.lastStep = index === len;
					child.color = self.color;

					if(index === self.current) {
						child.status = 'process'
					} else if(index < self.current) {
						child.status = 'finish'
					} else {
						child.status = 'wait'
					}
				});
			},
			_handleTailWidth () {
				const self = this;
				const dom  = self.$el;
				const len  = dom.children.length - 1;
				this.itemsWidth = new Array(len + 1);

				let i = 0
			    for (; i <= len - 1; i++) {
			        const _item = this.$el.children[i].children
			        this.itemsWidth[i] = Math.ceil(_item[0].offsetWidth + _item[1].children[0].offsetWidth)
			    }
			    this.itemsWidth[i] = Math.ceil(this.$el.children[len].offsetWidth);
			    // div.steps的宽度
			    this.previousStepsWidth = Math.floor(this.$el.offsetWidth);
			    this._update();

        	//this.$el.children[len].style.position = 'absolute'

			    // 算出tailWidth, 动态更新子组件
			    this.$children.forEach((child, index) => {
			        child.tailWidth = (self.itemsWidth.length === 0 || index === len) ? 'auto' : self.itemsWidth[index] + self.tailWidth + 'px'
			    })
			},
			_update () {
				const len = this.$children.length - 1;
				let tw = 0;
				this.itemsWidth.forEach((w) => {
					tw += w
				})
				const dw = Math.floor((this.previousStepsWidth - tw)/len)*0.6 - 1;
				if(dw <= 0) {
					return
				}
				this.tailWidth = dw;
			}
			,
			resize () {
				const w = Math.floor(this.$el.offsetWidth)
				if(this.previousStepsWidth === w) {
					return;
				}
				this.previousStepsWidth = w;
				this._update();
			}
		},
		ready () {
			this.mapPropsToChildComponent();

			setTimeout(() => {
				this._handleTailWidth();
			}, 30)
		}
	}
</script>
