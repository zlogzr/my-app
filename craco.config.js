const path = require('path')
// 使用less插件
const CracoLessPlugin = require('craco-less')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = () => ({
  webpack: {
    alias: {
      'Pages': pathResolve('./src/pages'), // 配置@ （同时还要配置tsconfig）
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 修改主题色 
            modifyVars: { '@primary-color': '#4578FA' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    // 支持装饰器模式语法
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }]
    ]
  }
})