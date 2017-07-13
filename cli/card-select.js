function cardSelectPrompt(app) {
  const chooseCreditCardList = {
    type: 'list',
    name: 'selectedCardNumber',
    message: 'Which credit card do you want to service VAN\'s for?',
    choices: []
  };
  chooseCreditCardList.choices.push({
    name: '<-- Exit',
    value: null
  });
  app.cards.forEach((card, i) => {
    chooseCreditCardList.choices.push({
      name: `  ${card.cardholdersName} ############${String(card.lastFourOfCardNumber)}`,
      value: i
    });
  });

  return app.prompt(chooseCreditCardList).then((cardPromptResults) => {
    if (cardPromptResults.selectedCardNumber === null) {
      return app.exitSelected();
    }
    app.selectedCardNumber = cardPromptResults.selectedCardNumber;
    app.selectedCardNumber = app.selectedCardNumber[cardPromptResults.selectedCardNumber];
    return app.displayCardOptionsPrompt(app);
  });
}

module.exports = cardSelectPrompt;
