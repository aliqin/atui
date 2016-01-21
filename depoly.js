var ghpages = require('gh-pages')
var path = require('path')
ghpages.publish(path.join(__dirname, '.'), {
    branch: 'demo',
    src:'*.js',
    message: '同步demo',
    add:true,
    logger: function(message) {
      console.log(message);
    }
  },function(err) {
    console.log(err)
  });
