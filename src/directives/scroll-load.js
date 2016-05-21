// import Vue from 'vue'
Vue.directive('scroll-load', {
  bind() {},
  update(value) {
    let timmer
    let me = this
    let el = me.el
    let lock = false
    this.scrollHandler = function() {
      clearTimeout(timmer)
      timmer = setTimeout(() => {
        if (lock) {
          return
        }
        let elH = el.clientHeight
        let elOffset = el.getBoundingClientRect()
        let scrollTop = document.documentElement.scrollTop
        let elBottomOffset = elOffset.top + elH - scrollTop
        if (elBottomOffset < (screen.height + 50)) {
          lock = true
          me.vm[me.expression](() => {
            lock = false
          })
        }
      }, 16)
    }
    window.addEventListener('scroll', this.scrollHandler, false)
  },
  unbind() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
})

module.exports = {}
