import packageName from 'depcheck-package-name'

const svgRulePredicate = rule => rule.test && rule.test.test('.svg')

export default function (moduleOptions) {
  const options = { ...this.options.spriteSvgLoader, ...moduleOptions }
  this.extendBuild(config => {
    const imageLoaderRule = config.module.rules.find(svgRulePredicate)
    imageLoaderRule.test = /\.(png|jpe?g|gif|webp)$/
    config.module.rules.push({
      loader: packageName`svg-sprite-loader`,
      options,
      test: /\.svg$/,
    })
  })
}
