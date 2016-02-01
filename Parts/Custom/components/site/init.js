module.exports = initWidget

var widget = require('./views/widget')

function initWidget() {
  return { '<%= title %>': [ 'widgetFactory', 'article', init ] }
}

function init(serviceLocator, done) {
  serviceLocator.widgetFactory.register('<%= title %>', widget)
  serviceLocator.bodyComponentFactory.register('<%= title %>', widget)
  done()
}
