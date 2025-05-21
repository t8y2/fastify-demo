'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_AUTH_DB} = fastify.config
  const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_AUTH_DB}`

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: mongoUrl
  })
})
