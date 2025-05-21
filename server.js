'use strict';

const fastify = require('fastify')({ logger: true });
const path = require('node:path');
const AutoLoad = require('@fastify/autoload');

async function start() {
  try {
    // 注册插件
    fastify.register(AutoLoad, {
      dir: path.join(__dirname, 'plugins'),
    });

    // 注册路由
    fastify.register(AutoLoad, {
      dir: path.join(__dirname, 'routes'),
    });

    // 等待所有插件和路由注册完成
    await fastify.ready();

    const port = process.env.PORT || 3000;
    const host = process.env.HOST || '0.0.0.0';

    await fastify.listen({ port, host });
    fastify.log.info(`🌐 服务启动成功，运行环境：${process.env.NODE_ENV}，监听地址：http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start().catch((err) => {
  console.error('启动失败:', err);
  process.exit(1);
});
