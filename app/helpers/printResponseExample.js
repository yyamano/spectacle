var Handlebars = require('handlebars')
var common = require('../lib/common')

module.exports = function(value) {
  var html = common.printSchema(value)
  return new Handlebars.SafeString(html)
};
