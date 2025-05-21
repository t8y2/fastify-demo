const getExampleSchema = {
  querystring: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' },
    },
  },
};

module.exports = { getExampleSchema };
