<template>
  <div class="at-btn-group" :class="btnGroupClassObj" @click="clickBtnGroup">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      large: null,
      small: null
    },
    computed: {
      btnGroupClassObj () {
        return {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined"
        }
      }
    },
    methods: {
      clickBtnGroup (e) {
        e.cancelBubble = true;
        let target  = e.target;
        let $parent = target.parentNode;
        let $btns   = $parent.getElementsByClassName('btn');
        let index   = [].indexOf.call($btns, target);
        let len     = $btns.length;
        let oldClass = '';
        let newClass = '';


        for(let i = 0; i < len; i++) {
          oldClass = $btns[i].getAttribute('class');
          newClass = oldClass.replace('active', '');
          if(i == index) {
            newClass += ' active';
          }
          $btns[i].setAttribute('class', newClass);
        }

        this.$dispatch('switch', this, index);
      }
    }
  }
</script>
