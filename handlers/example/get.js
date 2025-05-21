const getExampleHandler = async (request, reply) => {
  console.log(process.env.PORT)
  reply.success({ hello: `Hello,` },  '数据获取成功！');
}

module.exports = {  getExampleHandler };
