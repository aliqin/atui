<template>
<div class="panel panel-default">
    <div class="panel-heading" @click="toggleIsOpen()">
      <slot name="panel-header"></slot>
    </div>
    <div class="panel-collapse"
      v-el:panel
      v-show="isOpen"
      transition="collapse"
    >
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props: {
      isOpen: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      header: {
        type: String
      }
    },
    data() {
      return {
        height: 0
      }
    },
    methods: {
      toggleIsOpen() {
        this.isOpen = !this.isOpen
        this.$dispatch('isOpenEvent', this)
      }
    },
    ready() {
      const panel = this.$els.panel
      panel.style.display = 'block'
      this.height = panel.offsetHeight
      panel.style.maxHeight = this.height + 'px'
      if (!this.isOpen) panel.style.display = 'none'
    }
  }
</script>

<style>
.accordion-toggle {
  cursor: pointer;
}

.collapse-transition {
transition: max-height .5s ease;
overflow: hidden;
}

.collapse-enter, .collapse-leave {
  max-height: 0!important;
}

</style>
