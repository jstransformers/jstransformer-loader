const loaderUtils = require('loader-utils')
const jstransformer = require('jstransformer')

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable()
  }

  // Retrieve the passed in options.
  const options = loaderUtils.parseQuery(this.query)

  // Construct the transformer.
  const transform = Object.keys(options)[0]
  const transformer = jstransformer(require('jstransformer-' + transform))

  // Render the template with JSTransformers.
  const output = transformer.render(source, options, options).body

  // Return the output as a string.
  // TODO: Use .compile() instead.
  return 'module.exports = ' + JSON.stringify(output)
}
