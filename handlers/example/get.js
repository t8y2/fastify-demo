const getExampleHandler = async (request, reply) => {
  const { name } = request.query;
  reply.success({ hello: `Hello, ${name}` },  '数据获取成功！');
}

module.exports = {  getExampleHandler };
