const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        // './src/driver.scss',
        './src/index.ts',
    ],
    output: {
        path: path.join(__dirname, '/../dist'),
        publicPath: '/dist/',
        filename: 'z-guide.min.js',
        // libraryTarget: 'umd',
        // library: 'Driver',
        // libraryExport: 'default',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    failOnWarning: false,
                    failOnError: true,
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            //   {
            //     test: /.scss$/,
            //     loader: ExtractTextPlugin.extract([
            //       {
            //         loader: 'css-loader',
            //         options: { url: false },
            //       },
            //       {
            //         loader: 'postcss-loader',
            //         options: {
            //           ident: 'postcss',
            //           plugins: [require('autoprefixer')()], // eslint-disable-line global-require
            //         },
            //       },
            //       'sass-loader',
            //     ]),
            //   },
        ],
    },
    plugins: [
        // new ExtractTextPlugin({
        //   filename: 'driver.min.css',
        //   allChunks: true,
        // }),
        // new OptimizeCssAssetsPlugin({
        //   assetNameRegExp: /\.min\.css$/g,
        //   // eslint-disable-next-line global-require
        //   cssProcessor: require('cssnano'),
        //   cssProcessorPluginOptions: {
        //     preset: [
        //       'default',
        //       {
        //         discardComments: { removeAll: true },
        //       },
        //     ],
        //   },
        //   canPrint: true,
        // }),
    ],
    stats: {
        colors: true,
    },
    devtool: 'cheap-module-source-map',
};
