var ghpages = require('gh-pages')
var path = require('path')
ghpages.publish(path.join(__dirname, './'), {
  branch: 'demo',
  message: '同步demo',
  // add:true,
  src:'{docs/**/*,build/**/*,dist/**/*,index.html}',
  logger: function(message) {
    console.log(message)
  }
}, function(err) {
  console.log(err || '文档部署成功！')
});

module.exports = {}
