'use strict';
const fp = require('fastify-plugin');

module.exports = fp(async function (fastify, opts) {
  await fastify.register(require('@fastify/jwt'), {
    secret: process.env.JWT_SECRET || 'supersecretkey',
  });
  // 通用鉴权装饰器
  await fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.unauthorized('无效或过期的 token');
    }
  });
});

// 示例：登录时签发 Token
// fastify.post('/login', async (request, reply) => {
//   const { username, password } = request.body;
//
//   if (username === 'admin' && password === '123456') {
//     const token = fastify.jwt.sign({ username });
//     return { code: 0, msg: '登录成功', token };
//   }
//
//   reply.code(401).send({ code: 1, msg: '用户名或密码错误' });
// });

// async function authRoutes(fastify, options) {
//   fastify.post('/login', async (request, reply) => {
//     const { username, password } = request.body;
//
//     // 这里模拟简单用户名密码校验，实际请替换为数据库验证
//     if (username === 'admin' && password === '123456') {
//       // 签发 token，设置1小时有效期
//       const token = fastify.jwt.sign({ username }, { expiresIn: '1h' });
//       return { code: 0, msg: '登录成功', token };
//     }
//
//     reply.code(401).send({ code: 1, msg: '用户名或密码错误' });
//   });
// }
//
// module.exports = authRoutes;
