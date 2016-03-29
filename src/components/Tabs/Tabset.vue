<template>
  <div class="navWrapper">
    <span v-if="renderData.length > showLen && showLen >= 3 " class="arrow-prev" @click="prev">&lt;</span>
    <!-- Nav tabs -->
     <ul :class="{
      'nav': true,
      'nav-tabs': (!base),
      'nav-base': (base)}" role="tablist">
            <li 
                v-for="r in renderData"
                v-bind:class="{
                  'active': ($index === active),
                  'disabled': r.disabled
                }"
                @click.prevent="handleTabListClick($index, r)"
                :disabled="r.disabled"
            >
                <a href="#">{{{r.header}}}</a>
            </li>
     </ul>
    <span v-if="renderData.length > showLen && showLen >= 3" class="arrow-next" @click="next">&gt;</span>

     <!-- Tab panes -->
     <div class="tab-content" v-el:tab-content>
        <slot></slot>
     </div>
  </div>

</template>

<script>
  export default {
    props: {
      effect: {
        type: String,
        default: 'fadein'
      },
      active: {
        type: Number,
        default: 0
      },
      showLen: {
        type: Number,
        default: 3
      },
      base: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        renderData: [],
        index: 2,
        translateX: 0,
        wrapperWidth: 0,
        navWidth: 0,
        prev_tabIndex:0,
        next_tabIndex:0,
        itemsWidth: []
      }
    },

    methods: {
        handleTabListClick(index, el) {
          if (!el.disabled) this.active = index
        },
        prev() {
          this._handleMoveX('right')
        },
        next() {
          this._handleMoveX('left')
        },
        _handleMoveX(direction) {
          const totalLen = this.renderData.length
          switch(direction) {
            case 'left':
              /**
               * 这里需要计算maxTabIndex, 本身Tab的最大index应该是totalLen-1，但是为了后面的Tab宽度太宽，需要将最大的index增加（this.showLen-1）, 也就是让整个nav再多向左移动这些次，以让每一个Tab的内容都能显示清楚。
               */
              let maxTabIndex = totalLen - 1 + (this.showLen - 1)
              if(this.next_tabIndex === maxTabIndex)return
              this.prev_tabIndex++
              this.next_tabIndex = this.prev_tabIndex + this.showLen - 1
            break;

            case 'right':
              if(this.prev_tabIndex === 0)return
              this.next_tabIndex--
              this.prev_tabIndex = this.next_tabIndex - (this.showLen - 1)
            break;
          }
          this.$el.querySelector('.nav').style.transform="translateX(-" + this.itemsWidth[this.prev_tabIndex].left + 'px)';
        },
        _handleTabWidth() {
          const self = this
          const dom  = self.$el
          const nav  = dom.querySelector('.nav')
          const list = nav.children
          const showlen  = this.showLen
          const len  = list.length
          self.next_tabIndex = showlen - 1

          let i = 0;
          for(; i < len; i++) {
            const _itemWidth = Math.ceil(list[i].offsetWidth);
            self.navWidth += _itemWidth
            self.itemsWidth.push({width:_itemWidth, left: self.navWidth-_itemWidth})
            if(i < showlen) {
              self.wrapperWidth += _itemWidth
            }
          }

          dom.style.width = self.wrapperWidth + 'px'
          self.$el.style.visibility = 'visible'
        }
    },

    compiled () {
      this.$el.style.visibility = 'hidden'
    },

    ready () {
        const self = this    
        /**
         * 动态去设置容器navWrapper的宽度以及内部nav的宽度，以便让它不溢出，类似于轮播图。
         * 这里需要用setTimeout函数，否则获取不到dom节点。
         */        
        setTimeout( () => {
            self._handleTabWidth()
        },30)
    }
  }

</script>

<style lang="less" scoped>
  .navWrapper {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden; 
    padding-left: 20px;
    padding-right: 40px;
    box-sizing: content-box;

    .arrow-next ,.arrow-prev {
      position: absolute;
      top: -2px;
      z-index:10;
      cursor: pointer;
      display: inline-block;
      width: 20px;
      height: 54px;
      line-height: 54px;
      text-align: center;
      background-color: #fff;
    }

    .arrow-prev {
      left: 0;
    }

    .arrow-next {
      right: -6px;
    }

  }
  .nav-tabs {
    margin-bottom: 15px
  }

  .nav-scroll {
    max-width: 99999px;
    overflow: hidden;
  }
</style>
