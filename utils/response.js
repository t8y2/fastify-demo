// utils/response.js
function successResponse(data, msg = 'success', code = 0) {
  return {
    code,
    msg,
    data,
  };
}

function errorResponse(error, msg = 'error', code = 1) {
  return {
    code,
    msg: `${msg}: ${error.message}`,
    data: null,
  };
}

module.exports = { successResponse, errorResponse };
