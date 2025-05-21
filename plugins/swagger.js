'use strict';
const fp = require('fastify-plugin');

// 使用 fastify-plugin 包装插件，确保它能被 fastify-autoload 或手动注册正确加载
module.exports = fp(async function (fastify, opts) {
  // 注册 @fastify/swagger 插件，用来生成接口的 OpenAPI（Swagger）JSON 文档
  await fastify.register(require('@fastify/swagger'), {
    // 定义生成的 Swagger JSON 文档的访问路径，比如 http://localhost:3000/docs/json
    routePrefix: '/docs/json',

    // swagger 配置，遵循 OpenAPI 规范
    swagger: {
      info: {
        title: '示例 API', // 文档标题
        description: 'Fastify-Demo接口文档', // 文档描述
        version: '1.0.0', // 文档版本号
      },
      consumes: ['application/json'], // API 支持的请求内容类型
      produces: ['application/json'], // API 支持的响应内容类型
    },

    // 是否将生成的 JSON 文档路由暴露出来，设置为 true，外部才能访问
    exposeRoute: true,
  });

  // 注册 @fastify/swagger-ui 插件，用来渲染交互式的 Swagger UI 文档页面
  await fastify.register(require('@fastify/swagger-ui'), {
    // Swagger UI 的访问路径，比如 http://localhost:3000/documentation
    routePrefix: '/docs',

    // swagger-ui 页面配置
    uiConfig: {
      docExpansion: 'list', // 文档默认展开方式：'list' 展开一级目录，接口折叠
      deepLinking: false, // 是否支持深度链接，禁用后 URL 不会变化
    },

    // 是否启用静态内容安全策略（Content Security Policy）
    staticCSP: true,

    // 是否暴露 swagger-ui 路由，设置为 true 使其可访问
    exposeRoute: true,
  });

  fastify.log.info(`🚀 Swagger 文档已启动，访问地址：http://localhost:${process.env.PORT}/docs`);
});
