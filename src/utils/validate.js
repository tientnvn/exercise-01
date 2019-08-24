const Joi = require('@hapi/joi')
const boom = require('@hapi/boom')
const url = require('url')

function checkShowResultError (body, schema) {
  const result = Joi.validate(body, schema)
  if (result.error) {
    throw boom.badRequest('FORM.NOT_VALIDATE', result.error.details)
  }
}

module.exports = schema => fn => async (req, res) => {
  const body = req.body
  if (!schema.body && !schema.query) {
    checkShowResultError(body, schema)
  }
  if (schema.body) {
    checkShowResultError(body, schema.body)
  }
  if (schema.query) {
    const queryData = url.parse(req.url, true).query
    checkShowResultError(queryData, schema.query)
  }
  return fn(req, res)
}
