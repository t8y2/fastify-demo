'use strict';

const path = require('node:path');
const AutoLoad = require('@fastify/autoload');

const options = {};

module.exports = async function (fastify, opts) {
  // 自动加载全部插件
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // 自动加载全部路由（根据目录结构）
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });
};

module.exports.options = options;
