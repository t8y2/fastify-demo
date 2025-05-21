'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  if (!fastify.config.ENABLE_MONGO) {
    fastify.log.warn('🔕 MongoDB 未启用，跳过连接');
    return;
  }

  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_AUTH_DB} = fastify.config
  const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_AUTH_DB}`

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: mongoUrl
  })

  fastify.log.info('✅  MongoDB 连接成功，系统已就绪，开始征服数据世界！');
})
