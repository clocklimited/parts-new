var BaseModel = require('cf-base-model')
  , validateDelegate = require('../../../../../admin/source/js/lib/validate-delegate')()
  , schemata = require('../../../../service/widget/model/base-widget')()
  , extend = require('lodash.assign')

extend(schemata.schema, {})

module.exports = BaseModel.extend(
  { schemata: schemata

  , type: '<%= title %>'

  , defaults: function () {
      return schemata.makeDefault({ type: this.type || '<%= title %>' })
    }

  , validate: validateDelegate

  , initialize: function () {}

  })
