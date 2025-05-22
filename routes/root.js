'use strict';

const packageJson = require('../package.json');
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const serverTime = new Date().toISOString();

    return {
      status: '🟢 Online',
      message: 'Welcome to the API 🚀',
      version: packageJson.version || '1.0.0',
      serverTime,
    };
  });
};
