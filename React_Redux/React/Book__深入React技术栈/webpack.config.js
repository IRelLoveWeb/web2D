const path = require("path")
const webpack = require('webpack')

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        app:"./src/app.js",
        vendors:['react','react-dom','react-router']
    },
    output:{
        path:path.resolve(__dirname, 'output/js'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                include:[
                    path.resolve(__dirname, 'src')
                ],
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:['es2015', 'stage-0', 'react'],
                        plugins:[
                            ["import", { libraryName: "antd", style: "css" }],
                            ["transform-decorators-legacy"]
                        ]
                    }
                }]
            },{
                test:/\.scss$/,
                include:[
                    path.resolve(__dirname,'src/css')
                ],
                use:['style-loader','css-loader','sass-loader']
            },{
                test:/\.scss$/,
                include:[
                    path.resolve(__dirname,'src/Test')
                ],
                use:['style-loader',{
                    loader:'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                },'sass-loader']
            },{
                test:/\.css$/,
                include:[
                    path.resolve(__dirname,'node_modules/antd/lib'),
                    path.resolve(__dirname,'node_modules/normalize.css/normalize.css')
                ],
                use:['style-loader','css-loader']
            },{
                test:/\.(png|jpg|gif)$/,
                exclude:/node_modules/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8912
                    }
                }]
            }
        ]
    },
    devServer:{
        proxy : {
            "/server/*" :{
                target: "http://localhost:3001",
                pathRewrite: {"^/server" : ""},
                changeOrigin: true
            }
        },
        historyApiFallback:true,
        hotOnly:true
    },
    resolve:{
        alias:{
            CSS:path.resolve(__dirname,'src/css'),
            TestCss:path.resolve(__dirname,'src/Test')
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' })
    ],
    //必须cdn引入相应的包才能生效
    // externals: {
    //     'antd':true,
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
}