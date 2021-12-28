const path = require('path');

module.exports = ({ file }) => {
  // 这里的 750 根据自己的需求改
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;

  return {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等

      'postcss-px-to-viewport': {
        // 要转化的单位
        unitToConvert: 'px',

        // UI设计稿的宽度
        viewportWidth: designWidth,

        // 转换后的精度，即小数点位数
        unitPrecision: 6,

        // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        //  propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
        propList: ['*'],
        
        // 指定不转换为视窗单位的类名，
        // selectorBlackList：转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，
        // 就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
        selectorBlackList: ['wrap'],

        // 指定需要转换成的视窗单位，默认vw
        viewportUnit: 'vw',

        // 指定字体需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw',

        // 设置忽略文件，用正则做目录名匹配
        // exclude: [/node_modules/],

        // 默认值1，小于或等于1px则不进行转换
        minPixelValue: 1,
        // 是否在媒体查询的css代码中也进行转换，默认false
        mediaQuery: true,
        // 是否转换后直接更换属性值
        replace: true,

        // 是否处理横屏情况
        landscape: false
      }
    }
  }
}