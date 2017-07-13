const { URLSearchParams } = require('url');

function conformJSONToRequest(app) {
  return (jsonRequestObject) => {
    const requestURLSearchParams = new URLSearchParams();
    Object.keys(jsonRequestObject).forEach(key => {
      requestURLSearchParams.set(key, jsonRequestObject[key]);
    });
    return requestURLSearchParams.toString();
  };
};

module.exports = conformJSONToRequest;
