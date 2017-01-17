var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')
var precss       = require('precss')
var autoprefixer = require('autoprefixer')
var projectRoot = path.resolve(__dirname, 'src/')
var fs = require('fs')

// get all components dirs
function initCompDirs(){
  var compRoot = path.resolve(process.cwd(),'src/components'),
      compReg  = /^[A-Z]\w+$/;

  //['Button', 'Select']
  compDirs = fs.readdirSync(compRoot).filter(function(filename){
    return compReg.test(filename)
  })

  return compDirs
}

// convert DatePicker 2 date-picker
function camel2Dash(_str) {
  var str = _str[0].toLowerCase() + _str.substr(1);
  return str.replace(/([A-Z])/g, function camel2DashReplace($1) {
    return '-' + $1.toLowerCase();
  });
}

var entryMap = {},
    externalsMap = {}
    compDirs = initCompDirs(),
    utilMods = [],
    directiveMods = [],
    filterMods = [];

function initAllMods(){
  // components entry
  compDirs.forEach(function(dirname){
    var dashName = camel2Dash(dirname)
    entryMap[dashName] = './src/components/' + dirname + '/index.js'
  })

  // _utils
  fs.readdirSync(path.resolve(process.cwd(),'src/components/_utils')).forEach(function(filename){
    var modName = filename.replace(/\.js/,'');
    utilMods.push(modName)
  })

  // directive
  fs.readdirSync(path.resolve(process.cwd(),'src/directives')).forEach(function(filename){
    var modName = filename.replace(/\.js/,'');
    directiveMods.push(modName);
  })

  // filters
  fs.readdirSync(path.resolve(process.cwd(),'src/filters')).forEach(function(filename){
    var modName = filename.replace(/\.js/,'');
    filterMods.push(modName);
  })
}

var config = {
  entry: {
  },
  output: {
    path: './lib',
    publicPath: '/build/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  resolve: {
    root: path.resolve('./'),
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
      //'atui': path.resolve(process.cwd())
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  externals: [
    {
      vue: {
        commonjs: 'vue',
        amd: 'vue',
        commonjs2: 'vue',
        root: 'Vue'
      }
    },
    function(context, request, callback) {
      // Every comp module becomes external
      // "../DatePicker/" -> './date-picker'
      var compMatch = request.match(/([A-Z]\w+)\/?$/);
      var compName = compMatch && compMatch[1];
      if(compName && ~compDirs.indexOf(compName)) {
        return callback(null, "./" + camel2Dash(compName));
      }

      // deal with _utils
      var utilsMatch = request.match(/_utils\/([\w-]+)/);
      var utilFile = utilsMatch && utilsMatch[1];
      if(utilFile && ~utilMods.indexOf(utilFile)){
        return callback(null, "atui/lib/_utils/" + utilFile);
      }

      // deal with directives
      var directivesMatch = request.match(/directives\/([\w-]+)/);
      var directivesFile = directivesMatch && directivesMatch[1];
      if(directivesFile && ~directiveMods.indexOf(directivesFile)){
        return callback(null, "atui/lib/directives/" + directivesFile);
      }

      // deal with filters
      var filtersMatch = request.match(/filters\/([\w-]+)/);
      var filtersFile = filtersMatch && filtersMatch[1];
      if(filterMods && ~filterMods.indexOf(filtersFile)){
        return callback(null, "atui/lib/filters/" + filtersFile);
      }

      callback();
    },
  ],
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }],
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
    },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
    }],
    noParse:[/addr.js/,/^vue$/]
  },
  vue: {
    loaders: {
      less: ExtractTextPlugin.extract(
              // activate source maps via loader query
              'css?sourceMap!' +
              'less?sourceMap'
              ),
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  postcss: function () {
    return {
      defaults: [precss, autoprefixer],
      cleaner:  [autoprefixer({ browsers: ['ie >= 9'] })]
    }
  },
  plugins:[
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })  
  ]
}

function setup(){
  initAllMods();
  // merge to config
  for(var key in entryMap){
    config.entry[key] = [entryMap[key]]
  }
}

setup()

module.exports = config