function cardSelectPrompt(app) {
  const chooseCreditCardList = {
    type: 'list',
    name: 'selectedCardNumber',
    message: 'Which credit card do you want to service VAN\'s for?',
    choices: []
  };
  chooseCreditCardList.choices.push({
    name: app.chalk.yellow('<-- Exit'),
    value: null
  });
  app.creditCards.forEach((card, i) => {
    chooseCreditCardList.choices.push({
      name: app.chalk.cyan(`  ${card.CardholderName} ############${String(card.PAN)}`),
      value: i
    });
  });

  return app.prompt(chooseCreditCardList).then((cardPromptResults) => {
    if (cardPromptResults.selectedCardNumber === null) {
      return app.exitSelected();
    }
    app.selectedCardNumber = cardPromptResults.selectedCardNumber;
    app.selectedCard = app.creditCards[app.selectedCardNumber];
    return app.displayCardOptionsPrompt(app);
  });
}

module.exports = cardSelectPrompt;
