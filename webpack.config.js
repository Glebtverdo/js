let path = require('path');

let conf = {
    entry: './js/osnova.js',
    output: {
        path: path.resolve(__dirname, './mainJs'),
        filename: 'main.js',
        publicPath: 'mainJs/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}
module.exports = conf