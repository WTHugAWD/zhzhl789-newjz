// 导入Node.js的path模块
const path = require('path')

// 拼接路径
const resolve = dir => {
  return path.join(__dirname, dir)
}


module.exports = {
  lintOnSave: false,
  // 配置webpack
  chainWebpack: config => {
    config.resolve.alias
          .set('api', resolve('src/api'))
          .set('components', resolve('src/components'))
          .set('config', resolve('src/config'))
          .set('utils', resolve('src/utils'))
          .set('pages', resolve('src/pages'))
          .set('assets', resolve('src/assets'))
          .set('router', resolve('src/router'))
          .set('store', resolve('src/store'))
          .set('libs', resolve('src/libs'))

  },
  // 在打包时不生成Map文件
  productionSourceMap: false
}
