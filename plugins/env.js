// plugins/mongodb.js
'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  // 定义环境变量的 schema
  const schema = {
    type: 'object',
    required: ['PORT'], // 确保关键字段是必须的
    properties: {
      PORT: { type: 'string', default: '3000' },
      MONGO_USER: { type: 'string', default: '' }, // 提供默认值以支持无认证连接
      MONGO_PASSWORD: { type: 'string', default: '' },
      MONGO_HOST: { type: 'string' },
      MONGO_PORT: { type: 'string', default: '27017' }, // MongoDB 默认端口
      MONGO_DB: { type: 'string' },
      MONGO_AUTH_DB: { type: 'string', default: 'admin' }, // 默认认证数据库
      REDIS_HOST: { type: 'string', default: '127.0.0.1'},
      REDIS_PORT: { type: 'string', default: '6379' },
      REDIS_PASSWORD: { type: 'string', default: '' }
    },
  };

  // 配置 fastify-env 选项，动态加载 .env 文件
  await fastify.register(require('@fastify/env'), {
    confKey: 'config', // 环境变量存储在 fastify.config 中
    schema: schema,
    dotenv: {
      path: ['.env', process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : null].filter(Boolean),
      debug: true, // 开启调试日志，便于排查问题
      override: true, // 允许覆盖已定义的环境变量
    },
  });
})
