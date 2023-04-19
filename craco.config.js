const path = require('path')
const CracoLessPlugin = require('craco-less')
// const { whenProd } = require("@craco/craco");
const resolve = (pathname) => path.resolve(__dirname, pathname)
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils')
    }
  }
  // devServer:{
  //   proxy:{
  //     '/api':{
  //       target:'https://music.163.com',
  //       changeOrigin: true,
  //       secure:false
  //     }
  //   }
  // }
}
