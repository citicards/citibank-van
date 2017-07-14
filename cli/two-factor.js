function twoFactorVerifyCodePrompt(app, twoFactor) {
  return app.prompt([
    {
      type: 'input',
      message: 'Enter the code you received',
      name: 'code'
    },
  ]).then((userPromptResults) => {
    return twoFactor.verifyCode(userPromptResults.code);
  });
}

function twoFactorPrompt(app, twoFactor) {
  const chooseVerifyMethodList = {
    type: 'list',
    name: 'selectedOption',
    message: 'Which credit card do you want to service VAN\'s for?',
    choices: []
  };
  twoFactor.verifyMethods.forEach(method => {
    chooseVerifyMethodList.choices.push({
      name: method.Text,
      value: method.Id
    });
  });

  return app.prompt(chooseVerifyMethodList).then((methodSelected) => {
    return twoFactor.selectVerifyMethod(methodSelected.selectedOption).then(() => {
      return twoFactorVerifyCodePrompt(app, twoFactor).catch(e => {
        console.log(e);
        return twoFactorVerifyCodePrompt(app, twoFactor).catch(e2 => {
          console.log(e2);
          return twoFactorVerifyCodePrompt(app, twoFactor);
        });
      });
    });
  });
}

module.exports = twoFactorPrompt;
