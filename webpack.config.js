const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './index.js',
    output: {filename: 'bundle.js', path: __dirname + "/dist" },
    module: {
        loaders: [
            {
                test:/\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins:['transform-runtime'],
                    presets:['es2015', 'react']
                }
            }
        ]
    }
}