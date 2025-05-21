// handlers/example/get.js
'use strict';

const { successResponse, errorResponse } = require('../../utils/response');
const getExampleHandler = async function (request, reply) {
  try {
    const users = await this.mongo.db.collection('model').find({}, {}).toArray();
    return successResponse(users, '111', 111);
  } catch (error) {
    return errorResponse(error, 'Failed to fetch users', 500);
  }
};

module.exports = { getExampleHandler };
