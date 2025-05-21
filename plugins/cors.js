'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify, opts) {
  if (!fastify.config.ENABLE_CORS) {
    fastify.log.warn('🔕 CORS 策略未启用，跳过配置');
    return;
  }

  await fastify.register(require('@fastify/cors'), {
    // origin: process.env.NODE_ENV === 'production' ? 'https://your-frontend.com' : '*', // 生产环境限制特定域名，开发环境允许所有
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 允许的 HTTP 方法
    allowedHeaders: ['Content-Type', 'Authorization'], // 允许的请求头
    credentials: true, // 允许发送凭据（如 cookies）
  });

  fastify.log.info('🛡️CORS 策略激活成功，跨域请求畅通无阻！');
});
