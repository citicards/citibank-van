function cardOptionsPrompt(app) {
  const chooseCreditCardOptionList = {
    type: 'list',
    name: 'optionSelected',
    message: 'Select an Option?',
    choices: [
      {
        name: app.chalk.yellow('<- Go Back'),
        value: 'back'
      },
      {
        name: app.chalk.cyan('  Generate New Virtual Account Number with no limits'),
        value: 'generate-van-no-limits'
      },
      {
        name: app.chalk.cyan('  Generate New Virtual Account Number with limits'),
        value: 'generate-van-with-limits'
      },
      new app.inquirer.Separator(app.chalk.green('----Active Vans----'))
    ]
  };

  if (!app.selectedCard.ActiveVans || !app.selectedCard.ActiveVans.length) {
    chooseCreditCardOptionList.choices.push(new app.inquirer.Separator(app.chalk.green('  No Active Vans Found')));
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

  return app.prompt(chooseCreditCardOptionList).then((cardSelectPrompt) => {
    switch(cardSelectPrompt.optionSelected) {
    case 'generate-van-no-limits':
      return app.van.generateVanForACreditCard(app.selectedCard).then(results => {
        if (results.twoFactorNeeded) {
          return app.displayTwoFactorPrompt(results).then(() => app.van.generateVanForACreditCard(app.selectedCard));
        }
        return results;
      }).then(newcard => {
        console.log(app.chalk.green(`\n---new card generated--\n\n  ${newcard.PAN} EXP: ${newcard.Expiry} CVV: ${newcard.AVV} \n\n`));
        return app.displayCardOptionsPrompt();
      });
    case 'generate-van-with-limits':
      return app.displayGenerateVanWithLimitsPrompt();
    case 'back':
      return app.displayCardSelectPrompt();
    default:
      app.selectedVan = app.selectedCard.ActiveVans[Number(cardSelectPrompt.optionSelected)];
      return app.displayServiceVanPrompt();
    }
  });
}

module.exports = cardOptionsPrompt;
