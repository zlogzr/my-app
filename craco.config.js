const path = require('path')
// 使用 less 插件
const CracoLessPlugin = require('craco-less')
// 使用 alias 插件
const aliasPlugin = require('craco-alias')
// 加快打包速度
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const swcPlugin = require('craco-swc')

const createWebpackPlugins = () => {
  const defaultPlugins = []

  const addAnalyze = () => {
    const isAnalyze = process.env.ANALYZE
    if (isAnalyze) {
      defaultPlugins.push(
        new AnalyzerPlugin({
          analyzerMode: 'server'
        })
      )
    }
  }
  addAnalyze()
  return defaultPlugins
}

module.exports = () => ({
  webpack: {
    configure: {
      cache: true
    },
    plugins: createWebpackPlugins()
  },
  plugins: [
    // 支持 less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 修改主题色
            modifyVars: { '@primary-color': '#4578FA' },
            javascriptEnabled: true
          }
        }
      }
    },
    // 支持别名
    {
      plugin: aliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json'
      }
    },
    // 加快打包速度
    {
      plugin: {
        ...swcPlugin,
        // 覆盖与eslint冲突的规则
        overrideCracoConfig: ({ cracoConfig }) => {
          if (typeof cracoConfig.eslint.enable !== 'undefined') {
            cracoConfig.disableEslint = !cracoConfig.eslint.enable
          }
          delete cracoConfig.eslint
          return cracoConfig
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
          if (typeof cracoConfig.disableEslint !== 'undefined' && cracoConfig.disableEslint === true) {
            webpackConfig.plugins = webpackConfig.plugins.filter(instance => instance.constructor.name !== 'ESLintWebpackPlugin')
          }
          return webpackConfig
        }
      }
    }
  ],
  babel: {
    // 支持装饰器模式语法
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
  }
})
