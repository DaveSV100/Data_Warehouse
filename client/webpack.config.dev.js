const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TercerPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/",
        // assetModuleFilename: 'assets/images[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }, 
            // {
            //     test: /\.(woff|woff2)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10000,
            //             mimitype: "application/font-woff",
            //             name: "[name].[contenthash].[ext]",
            //             outputPath: "./assets/fonts/",
            //             publicPath: "./assets/fonts/",
            //             esModule: false,
            //         }
            //     }
            // }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, "src", "styles"),
        //             to: "assets/images"
        //         }
        //     ]
        // }),
        // new Dotenv(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TercerPlugin(),
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3307,
        open: true
    },
}