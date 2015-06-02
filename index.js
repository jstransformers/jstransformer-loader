var loaderUtils = require('loader-utils');
var jstransformer = require('jstransformer');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  // Retrieve the passed in options.
  var options = loaderUtils.parseQuery(this.query);

  // Construct the transformer.
  var transform = Object.keys(options)[0];
  var transformer = jstransformer(require('jstransformer-' + transform));

  // Render the template with JSTransformers.
  var output = transformer.render(source, options, options).body;

  // Return the output as a string.
  // TODO: Use .compile() instead.
  return "module.exports = " + JSON.stringify(output);
};
