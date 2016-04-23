<template>
<div :class="['spin',size]" v-show="show">
  <div class="sping-point"></div>
  <div class="sping-point"></div>
  <div class="sping-point"></div>
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'spin',
  props:{
    show:{
      type:Boolean
    },
    size:{
      type:String,
      default:'default'
    }
  },
  methods: {
    show () {
      this.show = true;
    },
    hide () {
      this.show = false;
    }
  },
  created () {
    let self = this;
    // window.DAYU = window.DAYU || {};
    Vue.showLoading = function() {
        self.show();
    }
    Vue.hideLoading = function() {
        self.hide();
    }
  }
}
