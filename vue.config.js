const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      stylus: {
        import: [
          resolve('src/assets/styles/index.styl'),
        ],
      },
    },
  },
  chainWebpack: config => {
    config.module.rule('ts')
    config.module.rule('ts').use('ts-loader')
    config.module.rule('ts').use('babel-loader')
    config.module.rule('ts').use('cache-loader')
    config.plugin('fork-ts-checker')
  },
  productionSourceMap: false,
  transpileDependencies: [
    /\bvue-awesome\b/,
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
}
