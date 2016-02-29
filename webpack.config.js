var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = 'developemnt';

var metadata = {
    ENV: 'development',
    host: 'localhost',
    port: 3000
};

module.exports = {

    metadata: metadata,
    devtooL: 'source-map',
    debug: true,
    entry: { 'polyfills': './src/polyfills.ts',
             'main': './src/main.ts' },

    output: {
        path: root('dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: prepend( ['.ts', '.js', '.json', '.css', '.html'], '.async')
    },

    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs') ]},
        ],
        loaders: [
            { test: /.ts$/, loader: 'ts-loader', exclude: [ /\.(spec|ec2|async)\.ts$/ ] },

            { test: /.json$/, loader: 'json-loader' },
            { test: /.css$/, loader: 'raw-loader' },
            { test: /.html$/, loader: 'raw-loader', exclude: [ root('src/index.html') ] }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(metadata.ENV),
                'NODE_ENV': JSON.stringify(metadata.ENV)
            }
        })
    ],

    devServer: {
        port: metadata.port,
        host: metadata.host,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }

    },


};

function root(args) {

    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function prepend(extensions, args) {

    args = args || [];
    if(!Array.isArray(args)) { args = [args] }
    return extensions.reduce( function(memo, val) {
        return memo.concat(val, args.map(function(prefix) {
            return prefix + val;
        }));
    }, ['']);
}
