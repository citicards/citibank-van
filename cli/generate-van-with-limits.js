function generateVanWithLimits(app) {
  return app.prompt([
    {
      type: 'input',
      message: 'What is the maximum dollar amount that can be spent on this card?',
      name: 'spendLimit'
    },
    {
      type: 'input',
      message: 'How many months is this van good for?',
      name: 'numberOfMonthsValidFor'
    }
  ]).then((limitedGenerateVanPromptResponse) => {
    return app.van.generateVanForACreditCard(app.selectedCard, limitedGenerateVanPromptResponse.spendLimit, limitedGenerateVanPromptResponse.numberOfMonthsValidFor).then(results => {
      if (results.twoFactorNeeded) {
        return app.displayTwoFactorPrompt(results).then(() => {
          return app.van.generateVanForACreditCard(app.selectedCard, limitedGenerateVanPromptResponse.spendLimit, limitedGenerateVanPromptResponse.numberOfMonthsValidFor);
        });
      }
      return results;
    }).then(newcard => {
      console.log(app.chalk.green(`\n---new card generated--\n\n  ${newcard.PAN} EXP: ${newcard.Expiry} CVV: ${newcard.AVV} \n\n`));
      return app.displayCardOptionsPrompt();
    });
  });
}

module.exports = generateVanWithLimits;
