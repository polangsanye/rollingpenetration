var path=require("path")
module.exports = {
    mode: 'production',
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].bundle.js',  // 定义输出文件名
      },
  };
  