const { rotate } = require('../../lib/rotate')
const boom = require('@hapi/boom')
const validation = require('../../utils/validate')
const Joi = require('@hapi/joi')

const rotateRoute = validation(
  Joi.object({
      data: Joi.array(),
      n: Joi.number(),
      k: Joi.number()
    })
)(async (req, res) => {
  try {
    const { k, data, n } = req.body
    const rotateCount = k % 4
    let newMetrix = data
    let index = rotateCount
    for ( index = rotateCount; index > 0; index--) {
      newMetrix = rotate(newMetrix, n)
    }
    res.json({result: newMetrix})
  } catch (ex) {
    throw boom.notAcceptable(ex.message, ex)
  }
})

exports.rotateRoute = rotateRoute
