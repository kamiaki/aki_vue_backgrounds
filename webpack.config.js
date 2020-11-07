var path = require('path')
var webpack = require('webpack')
// 执行环境
const NODE_ENV = process.env.NODE_ENV;


module.exports = {
  entry: NODE_ENV == 'development' ? './src/main.js' : './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: 'build.js',
    filename: 'akibackgrounds.js', // 打包之后的名字 随便起
    library: 'akibackgrounds', // 使用require导入的时候使用的名字
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // 这里很关键 不然图片无法显示 将图片转换为base64码 超过10M的图片需要再设置大一点
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpeg|jpg|png|gif)\??.*$/,
        loader: 'url-loader',
        query: {
          // 图片大小限制 单位b    10485760 为 10M
          limit: 10485760,
          // 生成的文件的存放目录
          name: 'resourse/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
