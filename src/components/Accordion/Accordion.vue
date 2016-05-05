<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name:'accordion',
    props: {
      oneAtATime: {
        type: Boolean
      }
    },
    methods: {
      _mapIndexToChildComponent () {
        const self = this;
        self.$children.forEach((item, index) => {
          item.index = index
        })
      }
    },
    created() {
      this.$on('isOpenEvent', (child)=> {
        if (this.oneAtATime) {
          this.$children.forEach((item, index) => {
            item.index = index
            if (child !== item ) {
              item.isOpen = false
            }
          })
        }
      })
    },
    ready () {
      this._mapIndexToChildComponent();
    }
  }
</script>
