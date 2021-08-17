/*
 * @Author: your name
 * @Date: 2021-08-17 10:07:03
 * @LastEditTime: 2021-08-17 12:24:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rollingpenetration\webpack.config.js
 */
const path = require('path')
module.exports={
  mode: 'production',
  entry:path.resolve(__dirname,"./index.js"),
  output:{
    filename:'index.js',
    // library:'rollingpenetration',
    // libraryExport: 'default', // 增加这个属性
    // libraryTarget: 'umd',
    path:path.resolve(__dirname,"./dist")
  },
  devtool:"source-map",
}