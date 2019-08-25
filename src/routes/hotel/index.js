const { checkReservation } = require('../../lib/hotel-reservation')
const boom = require('@hapi/boom')
const Joi = require('@hapi/joi')
const validation = require('../../utils/validate')

const hotelRoute = validation(
  Joi.object({
      arrivals: Joi.array(),
      departure: Joi.array(),
      k: Joi.number()
    })
)(async (req, res) => {
  try {
    res.json(checkReservation(req.body))
  } catch (ex) {
    throw boom.notAcceptable(ex.message, ex)
  }
})

exports.hotelRoute = hotelRoute
