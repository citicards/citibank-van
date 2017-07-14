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
        name: app.chalk.cyan('  Generate New Virtual Account Number'),
        value: 'generate-default'
      },
      new app.inquirer.Separator(app.chalk.green('----Active Vans----'))
    ]
  };

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
    if (cardSelectPrompt.optionSelected === 'generate-default') {
      return app.van.generateVanForACreditCard(app.selectedCard).then(results => {
        if (results.twoFactorNeeded) {
          return app.displayTwoFactorPrompt(results).then(() => app.van.generateVanForACreditCard(app.selectedCard));
        }
        return results;
      }).then(newcard => {
        console.log(app.chalk.green(`\n---new card generated--\n\n  ${newcard.PAN} EXP: ${newcard.Expiry} CVV: ${newcard.AVV} \n\n`));
        return cardOptionsPrompt(app);
      });
    } else if (!isNaN(cardSelectPrompt.optionSelected)) {
      app.selectedVan = app.selectedCard.ActiveVans[Number(cardSelectPrompt.optionSelected)];
      return app.displayServiceVanPrompt();
    }
    return app.displayCardSelectPrompt();
  });
}

module.exports = cardOptionsPrompt;
