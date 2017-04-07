const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ROOT_PATH = path.resolve(__dirname);

const APP_PATH = path.resolve(__dirname, 'app');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_PATH
        // publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    // 添加 ES6， react 语法支持
                    presets: ['es2015', 'react'],

                    // 在开发环境才启用 HMR 和 Catch Error
                    env: {
                        development: {
                            presets: ['react-hmre']
                        }
                    }
                },
                include: APP_PATH
            },
            {
                test: /\.jsx$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                // options: {
                //     extends: 'airbnb',
                //     rules: {
                //         'comma-dangle': 2
                //     }
                // },
                options: {
                    extends: 'airbnb',
                    rules: {
                        indent: ['off']

                    }
                },
                include: APP_PATH
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'use react app' })
    ]
};
