require('./assets/docs.css')
require('../src/styles/themes/alidayu.less')
require('../src/styles/themes/tmallwt.less')
require('../src/styles/themes/alitx.less')
require('prismjs')
require('./js/showLanguage')

import gettingStarted from './example/gettingStarted.vue'
import affix from 'src/components/Affix.vue'
import container from './example/container.vue'
import buttonDocs from './example/buttonDocs.vue'
import spinDocs from './example/spinDocs.vue'
import inputDocs from './example/inputDocs.vue'
import textareaDocs from './example/textareaDocs.vue'
import formDocs from './example/formDocs.vue'
import switchDocs from './example/switchDocs.vue'

import headerDocs from './example/headerDocs.vue'
import alertDocs from './example/alertDocs.vue'
import badgeDocs from './example/badgeDocs.vue'
import tagDocs from './example/tagDocs.vue'
import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
import asideDocs from './example/asideDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
import buttonsDocs  from './example/buttonsDocs.vue'
import datepickerDocs from './example/datepickerDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
import modalDocs from './example/modalDocs.vue'
import popoverDocs from './example/popoverDocs.vue'
import progressbarDocs from './example/progressbar-docs.vue'
import selectDocs from './example/selectDocs.vue'
import tabsDocs from './example/tabsDocs.vue'
import tableDocs from './example/tableDocs.vue'
import tooltipDocs from './example/tooltipDocs.vue'
import typeaheadDocs from './example/typeaheadDocs.vue'


// filters
import phoneNumberDocs from './example/filters/phoneNumberDocs.vue'



Vue.config.debug = true

new Vue({
  el: '#wrapper',
  components: {
    gettingStarted,
    container,
    affix,
    buttonDocs,
    spinDocs,
    inputDocs,
    textareaDocs,
    switchDocs,
    formDocs,
    alertDocs,
    badgeDocs,
    tagDocs,
    headerDocs,
    accordionDocs,
    affixDocs,
    asideDocs,
    carouselDocs,
    buttonsDocs,
    datepickerDocs,
    dropdownDocs,
    modalDocs,
    popoverDocs,
    progressbarDocs,
    selectDocs,
    tabsDocs,
    tableDocs,
    tooltipDocs,
    typeaheadDocs,
    list: {
      inherit: true,
      template: ''
    },
    phoneNumberDocs
  },
  data() {
    return {
      elements:[],
      components: [],
      filters:[]
    }
  },
  filters: {
    space(val) {
      return val.replace(/[\u4e00-\u9fa5]|-/g, '')
    }
  },
  ready() {
    // add h1.anchor.innerHTML to sidebar list
    const elements = document.querySelectorAll('.elements .anchor')
    const components = document.querySelectorAll('.components .anchor')
    const filters = document.querySelectorAll('.filters .anchor')
    this.elements = [...elements].map(el=> el.innerHTML.replace(' ', '-'))
    this.components = [...components].map(el=> el.innerHTML.replace(' ', '-'))
    this.filters = [...filters].map(el=> el.innerHTML.replace(' ', '-'))
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
