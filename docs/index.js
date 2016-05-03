require('./assets/docs.css')
require('../src/styles/themes/alidayu.less')
require('../src/styles/themes/tmallwt.less')
require('../src/styles/themes/alitx.less')
require('prismjs')
require('./js/showLanguage')

import headerDocs from './example/headerDocs.vue'
import gettingStarted from './example/gettingStarted.vue'

import gridDocs from './example/gridDocs.vue'
//  基础类
import iconDocs from './example/iconDocs.vue'

// 表单类
import buttonDocs from './example/buttonDocs.vue'
import buttonsDocs  from './example/buttonsDocs.vue'
import inputDocs from './example/inputDocs.vue'
import uploaderDocs from './example/uploaderDocs.vue'
import formDocs from './example/formDocs.vue'
import switchDocs from './example/switchDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
import selectDocs from './example/selectDocs.vue'
import calendarDocs from './example/calendarDocs.vue'

import datepickerDocs from './example/datepickerDocs.vue'
import searchboxDocs from './example/searchboxDocs.vue'
// import progressbarDocs from './example/progressbar-docs.vue'
// import typeaheadDocs from './example/typeaheadDocs.vue'


// 展示类
import messageDocs from './example/messageDocs.vue'
import cascaderDocs from './example/cascaderDocs.vue'
import modalDocs from './example/modalDocs.vue'
import tableDocs from './example/tableDocs.vue'
import badgeDocs from './example/badgeDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
import affix from 'src/components/Affix.vue'
import container from './example/container.vue'
import spinDocs from './example/spinDocs.vue'
import textareaDocs from './example/textareaDocs.vue'
import tagDocs from './example/tagDocs.vue'
import tooltipDocs from './example/tooltipDocs.vue'
import accordionDocs from './example/accordionDocs.vue'


// 导航类
import affixDocs from './example/affixDocs.vue'
import asideDocs from './example/asideDocs.vue'
import popoverDocs from './example/popoverDocs.vue'
import tabsDocs from './example/tabsDocs.vue'
import stepsDocs from './example/stepsDocs.vue'
// import menuDocs from './example/menuDocs.vue'
import breadcrumbDocs from './example/breadcrumbDocs.vue'
import paginationDocs from './example/paginationDocs.vue'


// filters
import phoneNumberDocs from './example/filters/phoneNumberDocs.vue'

//widgets
import addressSelectDocs from './example/widgets/addressSelectDocs.vue'

Vue.config.debug = true

new Vue({
  el: '#wrapper',
  components: {
    gettingStarted,
    gridDocs,
    iconDocs,
    container,
    affix,
    buttonDocs,
    spinDocs,
    inputDocs,
    textareaDocs,
    uploaderDocs,
    switchDocs,
    formDocs,
    messageDocs,
    cascaderDocs,
    badgeDocs,
    tagDocs,
    headerDocs,
    accordionDocs,
    calendarDocs,
    // affixDocs,
    // asideDocs,
    carouselDocs,
    buttonsDocs,
    datepickerDocs,
    dropdownDocs,
    modalDocs,
    popoverDocs,
    // progressbarDocs,
    selectDocs,
    tabsDocs,
    tableDocs,
    stepsDocs,
    breadcrumbDocs,
    paginationDocs,
    tooltipDocs,
    // typeaheadDocs,
    // menuDocs,
    searchboxDocs,
    phoneNumberDocs,
    addressSelectDocs
    // addressSelectDocs:function(resolve) {
    //   require(['./example/widgets/addressSelectDocs.vue'], resolve);
    // }
  },
  data() {
    return {
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



// import Router from './routers'

// // // debug
// // Vue.config.debug = true

// // // start app
// var App = Vue.extend({
//   components:{
//     accordion: require('src/components/accordion.vue')
//   }
// })

// Router.start(App,'#wrapper')
