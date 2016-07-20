require('../src/style.js')
require('prismjs')
require('./js/showLanguage')

import headerDocs from './example/headerDocs.vue'
import affix from 'src/components/Affix.vue'
import container from './example/container.vue'

// filters
import phoneNumberDocs from './example/filters/phoneNumberDocs.vue'


Vue.config.debug = true

new Vue({
  el: 'body',
  components: {
    headerDocs,
    affix,
    container,
    phoneNumberDocs
  },
  data() {
    return {
      show:false,
      elements:[],
      components: [],
      filters:[],
      widgets:[]
    }
  },
  filters: {
    space(val) {
      return val.replace(/[\u4e00-\u9fa5]|-/g, '')
    }
  },
  ready() {
    this.show = true
    // add h1.anchor.innerHTML to sidebar list
    const elements = document.querySelectorAll('.elements .anchor')
    const components = document.querySelectorAll('.components .anchor')
    const filters = document.querySelectorAll('.filters .anchor')
    const widgets = document.querySelectorAll('.widgets .anchor')
    this.elements = [...elements].map(el=> el.innerHTML.replace(' ', '-'))
    this.components = [...components].map(el=> el.innerHTML.replace(' ', '-'))
    this.filters = [...filters].map(el=> el.innerHTML.replace(' ', '-'))
    this.widgets = [...widgets].map(el=> el.innerHTML.replace(' ', '-'))
    // Scrollspy
    const section = document.querySelectorAll('.bs-docs-section')
    const sections = {}
    const navbar = document.querySelector('#sidenav')
    let i = 0

    window.onload = ()=> {
      Array.prototype.forEach.call(section, (e)=> {
        sections[e.id] = e.offsetTop
      })
    }

    function scrollSpy() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

      for (i in sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (sections[i] + 420 <= scrollPosition) {
          if (navbar) {
            if (navbar.querySelector('.active')) {
              navbar.querySelector('.active').className = ''
              navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active'
            }
          }
        }
      }
    }

    window.onscroll = ()=> {
      scrollSpy()
    }
  }
})

