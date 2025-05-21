'use strict';

const fp = require('fastify-plugin');

module.exports = fp(async function (fastify, opts) {
  if (!fastify.config.ENABLE_COMPRESS) {
    fastify.log.warn('🔕 全局压缩策略未启用，跳过配置');
    return;
  }

  fastify.register(require('@fastify/compress'), {
    global: true, // 是否全局开启压缩（默认 true）
    threshold: 1024, // 小于 1KB 的响应不压缩
    // brotliOptions: {...} // Brotli 压缩参数，可选
  });
  fastify.log.info('🎉 COMPRESS压缩已启动，响应体秒变轻量级！');
});
