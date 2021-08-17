/*
 * @Author: your name
 * @Date: 2021-08-17 10:07:03
 * @LastEditTime: 2021-08-17 10:16:46
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
    path:path.resolve(__dirname,"./dist")
  },
  devtool:"source-map",
}