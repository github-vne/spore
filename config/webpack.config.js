const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveWebpackPlugin = require('remove-webpack-plugin');

const styledComponentsTransformer = require('typescript-plugin-styled-components').default;

const rootPath = process.cwd();
const resolvePath = path.resolve.bind(rootPath);

const config = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: ['node_modules', resolvePath('src')]
  },

  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: resolvePath('src'),
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer()]
              }),
              happyPackMode: true
            }
          }
        ]
      },
      {
        test: /\.(raw)\.svg$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: [/\.gif$/, /\.png$/, /^((?!(raw)).)*\.svg$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },

  stats: {
    warningsFilter: /export .* was not found in/
  },

  plugins: [
    new HardSourceWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', 'public'),
        to: path.resolve(__dirname, '..', 'build')
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new RemoveWebpackPlugin([path.resolve(__dirname, '..', 'build')], 'hide')
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    hot: true,
    port: 3001,
    host: '0.0.0.0',
    historyApiFallback: true
  },

  performance: {
    hints: false
  }
};

module.exports = config;
