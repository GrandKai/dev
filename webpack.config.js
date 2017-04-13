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
                    presets: ['es2015', 'react']

                    // 在开发环境才启用 HMR 和 Catch Error
                    // env: {
                    //     development: {
                    //         presets: ['react-hmre']
                    //     }
                    // }
                },
                include: APP_PATH
            }
            // ,
            // {
            //     test: /\.jsx$/,
            //     enforce: 'pre',
            //     loader: 'eslint-loader',
            //     // 发现以下配置的 options 未作用
            //     options: {
            //         extends: 'airbnb',
            //         rules: {
            //             indent: ['off'],
            //             'comma-dangle': 2
            //         }
            //     },
            //     include: APP_PATH
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        host: '192.168.4.71',
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'use react app' })
    ]
};
