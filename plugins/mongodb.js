// plugins/mongodb.js
'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: 'mongodb://root:123456@localhost:27017/agent-test?authSource=admin'
  })
})
