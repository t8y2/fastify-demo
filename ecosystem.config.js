module.exports = {
  apps: [
    {
      name: 'fastify-demo',
      script: 'server.js', // 直接运行你的 Fastify 应用
      instances: 4,
      exec_mode: 'cluster',
      // merge_logs: true,              // 合并子进程日志
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
