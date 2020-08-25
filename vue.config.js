module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Calculadora IMC'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/calculadora-imc/'
    : './'
}
