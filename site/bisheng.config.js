const path = require('path');

module.exports = {
  port: 8001,
  source: [
    //'./components',
    './src/components',
    './src/widgets',
    './docs',
    'CHANGELOG.md'
  ],
  lazyLoad: true,
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    //'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-atui',
  ],
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
    config.resolve.alias = {
      antd: 'antd',
      site: path.join(process.cwd(), 'site'),
    };

    /*config.babel.plugins.push([
      require.resolve('babel-plugin-antd'),
      {
        style: true,
        libraryName: 'antd',
        libDir: 'lib',
      },
    ]);*/

    return config;
  },
};
