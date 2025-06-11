# Fastify Demo

一个基于 [Fastify](https://www.fastify.io/) 框架构建的示例项目，展示了如何使用现代工具链搭建高性能、模块化的 Node.js Web
应用。

## 📦 项目依赖

本项目使用的依赖如下（部分关键依赖）：

- **Fastify 核心插件**：
    - [@fastify/autoload](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/autoload)
    - [@fastify/compress](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/compress)
    - [@fastify/cors](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/cors)
    - [@fastify/env](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/env)
    - [@fastify/jwt](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/jwt)
    - [@fastify/mongodb](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/mongodb)
    - [@fastify/redis](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/redis)
    - [@fastify/sensible](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/sensible)
    - [@fastify/swagger-ui](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/swagger-ui)
    - [@fastify/swagger](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/@fastify/swagger)

- **开发与工具依赖**：
    - [eslint](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/eslint), [prettier](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/prettier):
      代码规范与格式化
    - [pino-pretty](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/pino-pretty): 日志美化输出
    - [cross-env](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/cross-env): 跨平台环境变量设置
    - [fastify-cli](file:///Users/skyler/WebstormProjects/fastify-demo/node_modules/fastify-cli): Fastify 命令行工具

## 📁 项目结构

```
.
├── handlers               # 请求处理逻辑
├── hooks                  # Fastify 钩子函数
├── plugins                # 自定义或封装的 Fastify 插件
├── routes                 # 路由定义
├── schemas                # 数据验证 schema（如 Swagger/OpenAPI）
├── test                   # 测试文件目录
├── utils                  # 工具函数库（如 response.js）
├── README.md              # 项目说明文档
├── app.js                 # Fastify 实例主文件
├── ecosystem.config.js    # PM2 配置文件（生产部署）
├── index.js               # 入口文件
├── package.json           # 项目配置及依赖声明
├── pnpm-lock.yaml         # 依赖版本锁定文件
└── server.js              # 启动服务入口文件
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

默认监听地址：`http://localhost:3000`

### 构建生产版本（如果适用）

```bash
pnpm build
```

### 启动生产环境服务（PM2）

```bash
pnpm start
```

## 🧪 测试

运行所有测试：

```bash
pnpm test
```

运行单个测试文件：

```bash
pnpm test:test <test-file-name>
```

## 📝 文档

该项目集成了 [Swagger UI](http://localhost:3000/docs)，提供交互式 API 接口文档。你可以通过以下路径访问：

- **Swagger JSON 文档**：`/docs/json`
- **Swagger UI 页面**：`/docs`

相关插件配置详见：`plugins/swagger.js`

## 🛠️ 开发规范

- 使用 `Prettier + ESLint` 进行代码风格统一。
- 所有路由、插件、钩子等模块化组织，符合 `fastify-plugin` 规范。
- 推荐使用 `async/await` 编写异步逻辑，并合理使用 `try/catch` 错误处理。
- 使用 `pino` 进行日志记录，推荐结合 `pino-pretty` 在开发环境美化输出。

## 📌 注意事项

- 环境变量配置建议放在 `.env` 文件中，并通过 `@fastify/env` 加载。
- 生产部署建议使用 `PM2` 或其他进程管理工具。
- 所有接口应尽量使用 `schema` 进行输入校验和文档描述。

## 🤝 贡献指南

欢迎提交 PR，请确保遵循以下流程：

1. Fork 项目并创建新分支。
2. 修改代码并运行测试。
3. 提交符合 commit 规范的提交信息。
4. 创建 Pull Request 并说明修改内容。

## 📜 许可证

MIT License

---

这个 [README.md](file:///Users/skyler/WebstormProjects/fastify-demo/README.md)
包含了项目的安装、启动、测试、结构、文档、规范等多个方面，适用于团队协作和开源发布。你可以将其粘贴到你的 [README.md](file:///Users/skyler/WebstormProjects/fastify-demo/README.md)
文件中。