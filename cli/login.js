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
    console.log(app.chalk.yellow('...getting all creditcards and active vans for each creditcard'));
    return app.van.login(userPromptResults.username, userPromptResults.password)
      .then((creditCards) => {
        console.log(app.chalk.green('logged in successfully'));
        app.creditCards = creditCards;
        return app.displayCardSelectPrompt(app);
      });
  });
};

module.exports = loginPrompt;
