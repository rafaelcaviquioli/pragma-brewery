const Joi = require('joi');

module.exports = {
  id: Joi.number().integer().required(),
  temperature: Joi.number().integer().required()
};
