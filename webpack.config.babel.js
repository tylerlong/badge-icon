import path from 'path'

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'badge-icon.js',
    library: 'BadgeIcon',
    libraryTarget: 'umd',
    globalObject: 'this' // fix window undefined issue in node
  }
}
