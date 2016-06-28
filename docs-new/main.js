var Vue = require('vue')
var VueRouter = require('vue-router')
var App = require('./app.vue')
var routerMap = require('./router')

Vue.use(VueRouter)

Vue.config.debug = true
var router = new VueRouter()

routerMap(router)

router.start(App, '#app')
