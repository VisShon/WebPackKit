const path = require('path');
const HtlmWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname,'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name][].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtlmWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
}