const getExampleHandler = async (request, reply) => {
  console.log(process.env.PORT)
  reply.serviceUnavailable('Query parameter "name" is required');
}

module.exports = {  getExampleHandler };
