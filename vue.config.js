module.exports={
    productionSourceMap: false,    // 把打包后生成的map文件删除
    devServer: {
        open: true
    },

    // configureWebpack: config=>{
    //     if(process.env.NODE_ENV=='production'){
    //         return {
    //             plugins:[
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|\.css$/,   // 把这些文件格式进行打包
    //                     threshold: 10240,     // 小于10k的文件就不打包成gzip格式
    //                     deleteOriginalAssets: false   // 删除源代码，只留下压缩后的代码
    //                 })
    //             ]
    //         }
    //     }
    // }
}