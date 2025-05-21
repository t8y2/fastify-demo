module.exports = {
  apps: [
    {
      name: 'my-backend-service',
      script: 'npm',
      args: 'run start:prod', // 生产环境启动命令
      instances: 4,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
