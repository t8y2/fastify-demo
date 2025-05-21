'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  if (!fastify.config.ENABLE_REDIS) {
    fastify.log.warn('🔕 Redis 未启用，跳过连接');
    return;
  }

  const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = fastify.config
  const redisUrl = `redis://${REDIS_PASSWORD ? ':' + REDIS_PASSWORD + '@' : ''}${REDIS_HOST}:${REDIS_PORT}`

  fastify.register(require('@fastify/redis'), {
    url: redisUrl,
    closeClient: true
  })

  fastify.log.info('🔥 Redis 已成功连接，速度与激情，内存飞驰！🚗💨');
})