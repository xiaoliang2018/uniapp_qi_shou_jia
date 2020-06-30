const CompressionWebpackPlugin = require('compression-webpack-plugin')  
const productionGzipExtensions = ['js', 'css']  

configureWebpack: {  
    plugins: [  
          new CompressionWebpackPlugin({  
            filename: '[path].gz[query]',  
            algorithm: 'gzip',  
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),//匹配文件名
            threshold: 10240,//对10K以上的数据进行压缩  
            minRatio: 0.8,  
            deleteOriginalAssets:false,//是否删除源文件  
          })  
        ] 
}