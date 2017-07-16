const {
  LOGGING_IN,
  LOGIN_SUCCESS,
  PROMPT_TYPE,
  PASSWORD,
  USERNAME
} = require('./.constants');

function loginPrompt(app) {
  return app.prompt([
    {
      type: PROMPT_TYPE.INPUT,
      message: USERNAME,
      name: USERNAME
    },
    {
      type: PROMPT_TYPE.PASSWORD,
      message: PASSWORD,
      name: PASSWORD
    }
  ]).then((promptResponse) => {
    app.log.warn(LOGGING_IN);

    return app.van.login(
      promptResponse.USERNAME,
      promptResponse.PASSWORD
    ).then((creditCards) => {
      app.log.success(LOGIN_SUCCESS);
      app.creditCards = creditCards;
      return app.displayCardSelectPrompt(app);
    });
  });
};

module.exports = loginPrompt;
