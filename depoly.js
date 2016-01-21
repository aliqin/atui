var ghpages = require('gh-pages')
var path = require('path')
ghpages.publish(path.join(__dirname, '.'), {
  branch: 'demo',
  message: '同步demo',
  // add:true,
  src:'!(node_modules)',
  logger: function(message) {
    console.log(message);
  }
}, function(err) {
  console.log(err)
});

