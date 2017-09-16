const Joi = require('joi');

module.exports = {
  beer: Joi.string().required(),
  temperature: Joi.number().integer().required()
};
