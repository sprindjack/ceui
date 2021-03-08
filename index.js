(async () => {
  require('./AutoSignMachine.js').run()
})()

// <!-- 在项目入口处加上如下代码 -->
// process是Node 提供一些常用的全局变量，所有模块都可以调用
console.log('Env:%o,:%o', process.env.NODE_ENV)   // production：生产环境  development：开发环境
if (process.env.NODE_ENV === 'production') {
  console = console || {};
  console.log = function () { };
}
