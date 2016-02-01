var compileJade = require('../../../../../site/lib/compile-jade')
  , template = compileJade(__dirname + '/../templates/widget.jade')
  , assert = require('assert')
  , cheerio = require('cheerio')
  , widgetFixture =
    { displayOptions: [ 'desktop', 'tablet', 'mobile' ]
    }

describe('<%= title %> Widget: Template', function() {

  describe('Widget', function() {

    it('should extend the default widget template', function() {
      var mockData =
          { widget: widgetFixture
          , articles: []
          }
        , $ = cheerio.load(template(mockData))
      assert.equal($('.widget__wrapper').length, 1)
    })

    it('should populate the content block of the default widget template', function() {
      var mockData =
          { widget: widgetFixture
          , articles: []
          }
        , $ = cheerio.load(template(mockData))
      assert.equal($('.widget').length, 1)
    })

    // Place component tests here

  })

})
