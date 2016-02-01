module.exports = initWidget

function initWidget() {
  return { widget: [ 'widget', init ] }
}

function init(serviceLocator, done) {

  var widget =
    { name: '<%= title %>'
    , description: '<%= description %>'
    , model: require('./models/model')
    }

  serviceLocator.widgetFactory.register('<%= title %>', widget)
  serviceLocator.bodyComponentWidgetFactory.register('<%= title %>', widget)

  done()

}
