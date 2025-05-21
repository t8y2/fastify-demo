// 命名前面加个下划线是为了最先加载环境变量，autoload按照字典序加载
"use strict"
const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
  // 定义环境变量的 schema
  const schema = {
    type: "object",
    required: ["PORT", "ENABLE_MONGO", "ENABLE_REDIS"],
    properties: {
      PORT: {type: "number", default: 3000},
      JWT_SECRET: {type: "string", nullable: true},

      ENABLE_CORS:  {type: "boolean", default: true},
      ENABLE_COMPRESS:  {type: "boolean", default: true},
      ENABLE_MONGO: {type: "boolean", default: false},
      ENABLE_REDIS: {type: "boolean", default: false},

      MONGO_USER: {type: "string", nullable: true},
      MONGO_PASSWORD: {type: "string", nullable: true},
      MONGO_HOST: {type: "string", nullable: true},
      MONGO_PORT: {type: "number", nullable: true},
      MONGO_DB: {type: "string", nullable: true},
      MONGO_AUTH_DB: {type: "string", nullable: true},

      REDIS_HOST: {type: "string", nullable: true},
      REDIS_PORT: {type: "number", nullable: true},
      REDIS_PASSWORD: {type: "string", nullable: true}
    }
  };


  // 配置 fastify-env 选项，动态加载 .env 文件
  await fastify.register(require("@fastify/env"), {
    confKey: "config", // 环境变量存储在 fastify.config 中
    schema: schema,
    dotenv: {
      path: [".env", process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : null].filter(Boolean),
      debug: true, // 开启调试日志，便于排查问题
      override: true // 允许覆盖已定义的环境变量
    }
  });

  fastify.log.info("📦 环境变量加载完毕，配置就绪，系统即将启动！");
})
