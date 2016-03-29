<style lang="less">
/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
.spin,
.spin > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.spin {
    display: block;
    font-size: 0;
    color: #333;
}
.spin > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.spin {
    width: 32px;
    height: 32px;
}
.spin.small{
  width: 16px;
  height: 16px;
}
.spin.large{
  width: 64px;
  height: 64px;
}
.spin > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 100%;
}
.spin > div:nth-child(1) {
    -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
       -moz-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
         -o-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
            animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
}
.spin > div:nth-child(2) {
    -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
       -moz-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
         -o-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
            animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
}
.spin > div:nth-child(3) {
    -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
       -moz-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
         -o-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
            animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
}
.spin.small {
    width: 16px;
    height: 16px;
}
.spin.small > div {
    width: 4px;
    height: 4px;
}
.spin.large {
    width: 64px;
    height: 64px;
}
.spin.large > div {
    width: 20px;
    height: 20px;
}
/*
 * Animations
 */
@-webkit-keyframes ball-triangle-path-ball-one {
    0% {
        -webkit-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -webkit-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -webkit-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
}
@-moz-keyframes ball-triangle-path-ball-one {
    0% {
        -moz-transform: translate(0, 220%);
             transform: translate(0, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -moz-transform: translate(110%, 0);
             transform: translate(110%, 0);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -moz-transform: translate(220%, 220%);
             transform: translate(220%, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -moz-transform: translate(0, 220%);
             transform: translate(0, 220%);
    }
}
@-o-keyframes ball-triangle-path-ball-one {
    0% {
        -o-transform: translate(0, 220%);
           transform: translate(0, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -o-transform: translate(110%, 0);
           transform: translate(110%, 0);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -o-transform: translate(220%, 220%);
           transform: translate(220%, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -o-transform: translate(0, 220%);
           transform: translate(0, 220%);
    }
}
@keyframes ball-triangle-path-ball-one {
    0% {
        -webkit-transform: translate(0, 220%);
           -moz-transform: translate(0, 220%);
             -o-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -webkit-transform: translate(110%, 0);
           -moz-transform: translate(110%, 0);
             -o-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -webkit-transform: translate(220%, 220%);
           -moz-transform: translate(220%, 220%);
             -o-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(0, 220%);
           -moz-transform: translate(0, 220%);
             -o-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
}
@-webkit-keyframes ball-triangle-path-ball-two {
    0% {
        -webkit-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -webkit-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -webkit-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
}
@-moz-keyframes ball-triangle-path-ball-two {
    0% {
        -moz-transform: translate(110%, 0);
             transform: translate(110%, 0);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -moz-transform: translate(220%, 220%);
             transform: translate(220%, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -moz-transform: translate(0, 220%);
             transform: translate(0, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -moz-transform: translate(110%, 0);
             transform: translate(110%, 0);
    }
}
@-o-keyframes ball-triangle-path-ball-two {
    0% {
        -o-transform: translate(110%, 0);
           transform: translate(110%, 0);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -o-transform: translate(220%, 220%);
           transform: translate(220%, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -o-transform: translate(0, 220%);
           transform: translate(0, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -o-transform: translate(110%, 0);
           transform: translate(110%, 0);
    }
}
@keyframes ball-triangle-path-ball-two {
    0% {
        -webkit-transform: translate(110%, 0);
           -moz-transform: translate(110%, 0);
             -o-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -webkit-transform: translate(220%, 220%);
           -moz-transform: translate(220%, 220%);
             -o-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -webkit-transform: translate(0, 220%);
           -moz-transform: translate(0, 220%);
             -o-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(110%, 0);
           -moz-transform: translate(110%, 0);
             -o-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
}
@-webkit-keyframes ball-triangle-path-ball-tree {
    0% {
        -webkit-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -webkit-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -webkit-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
}
@-moz-keyframes ball-triangle-path-ball-tree {
    0% {
        -moz-transform: translate(220%, 220%);
             transform: translate(220%, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -moz-transform: translate(0, 220%);
             transform: translate(0, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -moz-transform: translate(110%, 0);
             transform: translate(110%, 0);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -moz-transform: translate(220%, 220%);
             transform: translate(220%, 220%);
    }
}
@-o-keyframes ball-triangle-path-ball-tree {
    0% {
        -o-transform: translate(220%, 220%);
           transform: translate(220%, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -o-transform: translate(0, 220%);
           transform: translate(0, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -o-transform: translate(110%, 0);
           transform: translate(110%, 0);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -o-transform: translate(220%, 220%);
           transform: translate(220%, 220%);
    }
}
@keyframes ball-triangle-path-ball-tree {
    0% {
        -webkit-transform: translate(220%, 220%);
           -moz-transform: translate(220%, 220%);
             -o-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
    17% {
        opacity: .25;
    }
    33% {
        opacity: 1;
        -webkit-transform: translate(0, 220%);
           -moz-transform: translate(0, 220%);
             -o-transform: translate(0, 220%);
                transform: translate(0, 220%);
    }
    50% {
        opacity: .25;
    }
    66% {
        opacity: 1;
        -webkit-transform: translate(110%, 0);
           -moz-transform: translate(110%, 0);
             -o-transform: translate(110%, 0);
                transform: translate(110%, 0);
    }
    83% {
        opacity: .25;
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(220%, 220%);
           -moz-transform: translate(220%, 220%);
             -o-transform: translate(220%, 220%);
                transform: translate(220%, 220%);
    }
}
</style>
<template>
<div :class="['spin',size]" v-show="show">
  <div></div>
  <div></div>
  <div></div>
</div>
</template>
<script>
export default {
  name: 'spin',
  props:{
    show:{
      type:Boolean,
      default:false
    },
    size:{
      type:String,
      default:'default'
    }
  },
  data () {
    return {
      size: this.size
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
