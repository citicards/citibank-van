function loginPrompt(app) {
  return app.prompt([
    {
      type: 'input',
      message: 'username',
      name: 'username'
    },
    {
      type: 'password',
      message: 'password',
      name: 'password'
    }
  ]).then((userPromptResults) => {
    return app.van.login(userPromptResults.username, userPromptResults.password)
      .then((cards) => {
        app.cards = cards;
        console.log(app.chalk.green('logged in successfully'));
        return app.displayCardSelectPrompt(app);
      });
  });
};

module.exports = loginPrompt;
