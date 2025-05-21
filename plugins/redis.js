'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = fastify.config
  const redisUrl = `redis://${REDIS_PASSWORD ? ':' + REDIS_PASSWORD + '@' : ''}${REDIS_HOST}:${REDIS_PORT}`

  fastify.register(require('@fastify/redis'), {
    url: redisUrl,
    closeClient: true
  })
})