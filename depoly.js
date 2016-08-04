var ghpages = require('gh-pages')
var path = require('path')
ghpages.publish(path.join(__dirname, './_site'), {
  branch: 'demo',
  message: '同步demo',
  // add:true,
  src:'**/*',
  logger: function(message) {
    console.log(message)
  }
}, function(err) {
  console.log(err || '文档部署成功！')
})

module.exports = {}
