'use strict';

const { getExampleSchema } = require('../../../../schemas/example');
const { getExampleHandler } = require('../../../../handlers/example/get');
const { getExamplePreHandler } = require('../../../../hooks/example/get');

module.exports = async function (fastify, opts) {
  fastify.get('/', {
    schema: getExampleSchema,
    preHandler: getExamplePreHandler,
    handler: getExampleHandler,
  });
};
