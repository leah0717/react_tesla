const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (pathname) => path.resolve(__dirname, pathname)
module.exports = {
  // babel: {
  //   // 配置样式按需引入
  //   plugins: [
  //     [
  //       'import',
  //       {
  //         libraryName: 'antd',
  //         libraryDirectory: 'es',
  //         style: true
  //       }
  //     ]
  //   ]
  // },
  plugins: [
    {
      plugin: CracoLessPlugin
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: {
      //         '@primary-color': '#1890ff' // 修改主题色
      //       },
      //       javascriptEnabled: true
      //     }
      //   }
      // }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils')
    }
  }
}
