// require('./assets/docs.css')
// require('../src/styles/themes/alidayu.less')
// require('../src/styles/themes/tmallwt.less')
// require('../src/styles/themes/alitx.less')
// require('prismjs')
// require('./js/showLanguage')

import headerDocs from './example/headerDocs.vue'
import gettingStarted from './example/gettingStarted.vue'

import gridDocs from './example/gridDocs.vue'

// 表单类
import buttonDocs from './example/buttonDocs.vue'
import buttonsDocs  from './example/buttonsDocs.vue'
import inputDocs from './example/inputDocs.vue'
import textareaDocs from './example/textareaDocs.vue'
import uploadDocs from './example/uploadDocs.vue'
import formDocs from './example/formDocs.vue'
import switchDocs from './example/switchDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
import selectDocs from './example/selectDocs.vue'
import datepickerDocs from './example/datepickerDocs.vue'
import progressbarDocs from './example/progressbar-docs.vue'
import typeaheadDocs from './example/typeaheadDocs.vue'


// 展示类
import alertDocs from './example/alertDocs.vue'
import modalDocs from './example/modalDocs.vue'
import tableDocs from './example/tableDocs.vue'
import badgeDocs from './example/badgeDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
// import affix from 'src/components/Affix.vue'
// import container from './example/container.vue'
import spinDocs from './example/spinDocs.vue'

import tagDocs from './example/tagDocs.vue'
import tooltipDocs from './example/tooltipDocs.vue'
import accordionDocs from './example/accordionDocs.vue'


// 导航类
import affixDocs from './example/affixDocs.vue'
import asideDocs from './example/asideDocs.vue'
import popoverDocs from './example/popoverDocs.vue'
import tabsDocs from './example/tabsDocs.vue'
import stepsDocs from './example/stepsDocs.vue'


// filters
import phoneNumberDocs from './example/filters/phoneNumberDocs.vue'

// configure router
var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
	'/components': {
		component: gettingStarted,
		// add a subRoutes map under /foo
		subRoutes: {
			'/': {
				component:gettingStarted
			},
			'/grid': {
				component:gridDocs
			},
			// 表单类
			'/button': {
				component:buttonDocs
			},
			'/buttons': {
				component:buttonsDocs
			},
			'/input': {
				component:inputDocs
			},
			'/textarea': {
				component:textareaDocs
			},
      '/upload': {
        component:uploadDocs
      },
			'/form': {
				component:formDocs
			},
			'/switch': {
				component:switchDocs
			},
			'dropdown': {
				component:dropdownDocs
			},
			'/datepicker': {
				component:datepickerDocs
			},
			'/select': {
				component:selectDocs
			},
			'/progressbar': {
				component:progressbarDocs
			},
			// 展示类
			'/alert': {
				component:alertDocs
			},
			'/modal': {
				component:modalDocs
			},
			'/table': {
				component:tableDocs
			},
			'/badge': {
				component:badgeDocs
			},
			'carousel': {
				component:carouselDocs
			},
			'/spin': {
				component:spinDocs
			},
			'/tag': {
				component:tagDocs
			},
			'/tooltip': {
				component:tooltipDocs
			},
			'/accordion': {
				component:accordionDocs
			},
			// 导航类
			'/affix': {
				component:affixDocs
			},
			'/aside': {
				component:asideDocs
			},
			'/popover': {
				component:popoverDocs
			},
			'/steps': {
				component:stepsDocs
			}
		}
	}
})


export default router;
