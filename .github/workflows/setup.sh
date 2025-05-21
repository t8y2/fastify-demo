#!/usr/bin/env bash

# 设置路径
APP_DIR="/data/tianyu/app/backend/fastify-demo"

# 进入目录
cd "$APP_DIR" || exit 1

# 确保 PM2 安装
if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
fi

# 使用 PM2 启动或 reload 应用
pm2 startOrReload ecosystem.config.js --env production

# 自动清理 PM2 的无用日志（可选）
pm2 flush
