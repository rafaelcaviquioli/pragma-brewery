const Joi = require('joi');
const payloadSchema = require('../../../src/resources/beer-container-temperature/payload.schema');

describe('#payloadSchema', () => {
  describe('#id', () => {
    const schema = payloadSchema.id;

    it('is number', () => {
      const { error: { details } } = Joi.validate('', schema);
      expect(details).toMatchObject([{ message: '"value" must be a number' }]);
    });

    it('is integer', () => {
      const { error: { details } } = Joi.validate(1.1, schema);
      expect(details).toMatchObject([{ message: '"value" must be an integer' }]);
    });

    it('is required', () => {
      const { error: { details } } = Joi.validate(undefined, schema);
      expect(details).toMatchObject([{ message: '"value" is required' }]);
    });
  });

  describe('#temperature', () => {
    const schema = payloadSchema.temperature;

    it('is number', () => {
      const { error: { details } } = Joi.validate('', schema);
      expect(details).toMatchObject([{ message: '"value" must be a number' }]);
    });

    it('is integer', () => {
      const { error: { details } } = Joi.validate(1.1, schema);
      expect(details).toMatchObject([{ message: '"value" must be an integer' }]);
    });

    it('is required', () => {
      const { error: { details } } = Joi.validate(undefined, schema);
      expect(details).toMatchObject([{ message: '"value" is required' }]);
    });
  });
});
