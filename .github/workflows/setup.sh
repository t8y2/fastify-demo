#!/usr/bin/env bash

# 使用第一个参数作为 APP_DIR，默认值是 /data/tianyu/app/backend/fastify-demo
APP_DIR="${1:-/data/tianyu/app/backend/fastify-demo}"

echo "🔧 部署路径：$APP_DIR"

cd "$APP_DIR" || exit 1

# 确保 PM2 安装
if ! command -v pm2 &> /dev/null; then
  echo "📦 PM2 未安装，正在全局安装..."
  npm install -g pm2
fi

# 启动或重载应用
pm2 startOrReload ecosystem.config.js --env production

# 清理日志
pm2 flush
