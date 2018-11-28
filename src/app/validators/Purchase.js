const Joi = require('joi')

module.exports = {
  body: {
    add: Joi.string().required(),
    content: Joi.string().required()
  }
}
