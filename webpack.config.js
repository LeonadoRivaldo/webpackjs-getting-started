const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devServer = {
    contentBase:'./dist'
};
const entry = {
    main: './src/index.js'
};
const output = {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
};
const plugins =  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Hello Webpack',
        filename: 'index.html',
        files: {
            css:[ 'main.css' ]
        }
    })
];
const modules = {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }
    ]
};
const optimization = { 
    runtimeChunk: 'single', 
    moduleIds: 'hashed',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    } 
};

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer, entry, output, plugins, optimization,
    module: modules
};