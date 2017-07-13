const { URLSearchParams } = require('url');

function conformResponseToJSON(app) {
  return (results) => {
    const parsedResults = new URLSearchParams(results.data);
    function keyShouldBeReturned(key) {
      return key !== 'Dummy' && key !== 'Eof' && key !== 'Action' && key !== 'SessionId' && key !== 'Indicator';
    };
    const data = {};
    parsedResults.forEach((value, key) => {
      if (keyShouldBeReturned(key)) {
        data[key] = value;
      }
      if (key === 'SessionId') {
        app.sessionId = value;
      }
    });
    if (data.ErrMsg) {
      throw data;
    }
    return data;
  };
};

module.exports = conformResponseToJSON;
