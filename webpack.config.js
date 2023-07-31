const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: {
        script: './src/script.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "script-build.js",
    },
    devServer: {
        open: true,
        host: 'localhost',
        liveReload: true,
        port: 9000,
        static: {
            directory: path.join(__dirname, "public"),
        },
        hot: false,
        https: false,
        client: {
            progress: true,
            overlay: {
                errors : true,
                warnings : false,
                runtimeErrors : true
            }
        },
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin({
            test: /\.js$/i, 
            exclude: /node_modules/,
          }),
          new ImageMinimizerPlugin({
            generator: [
              {
                preset: "webp",
                implementation: ImageMinimizerPlugin.sharpGenerate,
                options: {
                  encodeOptions:{
                    webp: {
                      quality: 60,
                    }
                  }
                }
              }
            ],
          })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject : true,
            minify : true,
            template: "./src/index.html",
            filename: "index.html",
            
        }),
        new HtmlWebpackPlugin({
            inject : true,
            minify : true,
            template: "./src/legal_mentions.html",
            filename: "legal_mentions.html",
            
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/ressources", to: "ressources"},
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: [
                        ['@babel/preset-env', { targets: {"ie" : "11"} }]
                    ]
                    },
                },
            },
            {
                test: /\.html?$/,
                use: [
                  {
                    loader : "html-loader",
                    options : {minimize: true}
                  }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler,'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset',
                generator:{
                    filename:'./ressources/fonts/[name][ext]',
                }, 
            },
            {
                test: /\.(webp|svg|png|jpe?g|gif)$/i,
                type: 'asset',
                generator:{
                    filename:'./ressources/images/[name][ext]',
                }, 
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
