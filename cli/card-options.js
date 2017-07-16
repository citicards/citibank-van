const {
  PROMPT_TYPE,
  LIST_ITEM_SELECTED,
  MENU_TEXT,
  MENU_TITLE,
  MENU_VALUE
} = require('./.constants');

function cardOptionsPrompt(app) {
  const chooseCreditCardOptionList = {
    type: PROMPT_TYPE.LIST,
    name: LIST_ITEM_SELECTED,
    message: MENU_TITLE.SELECT_CREDIT_CARD_OPTION,
    choices: [
      {
        name: app.chalk.yellow(MENU_TEXT.BACK),
        value: MENU_VALUE.BACK
      },
      {
        name: app.chalk.cyan(MENU_TEXT.GENERATE_VAN_WITH_NO_LIMITS),
        value: MENU_VALUE.GENERATE_VAN_WITH_NO_LIMITS
      },
      {
        name: app.chalk.cyan(MENU_TEXT.GENERATE_VAN_WITH_LIMITS),
        value: MENU_VALUE.GENERATE_VAN_WITH_LIMITS
      },
      new app.inquirer.Separator(app.chalk.green(MENU_TITLE.ACTIVE_VANS))
    ]
  };

  if (!app.selectedCard.ActiveVans || !app.selectedCard.ActiveVans.length) {
    chooseCreditCardOptionList.choices.push(new app.inquirer.Separator(app.chalk.green(MENU_TITLE.NO_ACTIVE_VANS_FOUND)));
  }

  app.selectedCard.ActiveVans.forEach((van, i) => {
    let color = app.chalk.green;
    if (van.ValidFlag !== 'Y' || van.MerchantId !== '-' || van.MerchantName !== '-') {
      color = app.chalk.yellow;
    }
    chooseCreditCardOptionList.choices.push({
      name: color(`  ${van.PAN} Exp: ${van.Expiry} CVV: ${van.AVV} Issued: ${van.IssueDate}`),
      value: i
    });
  });

  return app.prompt(chooseCreditCardOptionList).then((promptResponse) => {
    switch(promptResponse[LIST_ITEM_SELECTED]) {
      case MENU_VALUE.GENERATE_VAN_WITH_NO_LIMITS:
        return app.van.generateVanForACreditCard(app.selectedCard).then(results => {
          if (results.twoFactorNeeded) {
            return app.displayTwoFactorPrompt(results).then(() => app.van.generateVanForACreditCard(app.selectedCard));
          }
          return results;
        }).then(newcard => {
          console.log(app.chalk.green(`\n---new card generated--\n\n  ${newcard.PAN} EXP: ${newcard.Expiry} CVV: ${newcard.AVV} \n\n`));
          return app.displayCardOptionsPrompt();
        });
      case MENU_VALUE.GENERATE_VAN_WITH_LIMITS:
        return app.displayGenerateVanWithLimitsPrompt();
      case MENU_VALUE.BACK:
        return app.displayCardSelectPrompt();
      default:
        app.selectedVan = app.selectedCard.ActiveVans[Number(promptResponse[LIST_ITEM_SELECTED])];
        return app.displayServiceVanPrompt();
    }
  });
}

module.exports = cardOptionsPrompt;
