const {
  PROMPT_TYPE,
  LIST_ITEM_SELECTED,
  MENU_TITLE,
  MENU_VALUE,
  MENU_TEXT
} = require('./.constants');

function twoFactorVerifyCodePrompt(app, twoFactor) {
  return app.prompt([
    {
      type: PROMPT_TYPE.INPUT,
      message: MENU_TITLE.ENTER_CODE_RECEIVED,
      name: MENU_VALUE.CODE
    },
  ]).then((userPromptResults) => {
    return twoFactor.verifyCode(userPromptResults.code);
  });
}

function twoFactorPrompt(app, twoFactor) {
  const chooseVerifyMethodList = {
    type: PROMPT_TYPE.LIST,
    name: LIST_ITEM_SELECTED,
    message: MENU_TITLE.SELECT_CREDIT_CARD,
    choices: [
      {
        name: app.chalk.yellow(MENU_TEXT.BACK),
        value: MENU_VALUE.BACK
      },
    ]
  };
  twoFactor.verifyMethods.forEach(method => {
    chooseVerifyMethodList.choices.push({
      name: `  ${method.Text}`,
      value: method.Id
    });
  });

  return app.prompt(chooseVerifyMethodList).then((promptResponse) => {
    if(promptResponse[LIST_ITEM_SELECTED] === MENU_VALUE.BACK) {
      return app.displayCardOptionsPrompt();
    }
    const method = twoFactor.verifyMethods.find((item) => item.Id === promptResponse[LIST_ITEM_SELECTED]);
    return twoFactor.selectVerifyMethod(method).then(() => {
      return twoFactorVerifyCodePrompt(app, twoFactor).catch(e => {
        app.log.error(e);
        return twoFactorVerifyCodePrompt(app, twoFactor).catch(e2 => {
          app.log.error(e2);
          return twoFactorVerifyCodePrompt(app, twoFactor);
        });
      });
    });
  });
}

module.exports = twoFactorPrompt;
