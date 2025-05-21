'use strict'

const fp = require('fastify-plugin')


module.exports = fp(async function (fastify, opts) {
  fastify.decorateReply('success', function (data = {}, msg = 'success') {
    this.send({
      code: 0,
      msg,
      data,
    });
  });

  fastify.decorateReply('error', function (code = 1, msg = 'error', data = null) {
    this.send({
      code,
      msg,
      data,
    });
  });
})
