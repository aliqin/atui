module.exports = function(router) {
  router.map({
    '/': {
      name: 'components',
      component: function(resolve) {
        require(['./views/components.vue'], resolve)
      }
    },
  })

  router.redirect({
    // 重定向任意未匹配路径到 /
    '*': '/'
  })

}
