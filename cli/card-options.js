function cardOptionsPrompt(app) {
  const chooseCreditCardOptionList = {
    type: 'list',
    name: 'optionSelected',
    message: 'Select an Option?',
    choices: [
      {
        name: '<- Go Back',
        value: null
      },
      {
        name: '  Generate New Virtual Account Number',
        value: 1
      }
    ]
  };

  return app.prompt(chooseCreditCardOptionList).then((cardSelectPrompt) => {
    switch(cardSelectPrompt.optionSelected) {
    case 1:
      return app.van.generateVanForACreditCard(app.selectedCard);
    default:
      return app.displayCardSelectPrompt(app);
    }
  });
}

module.exports = cardOptionsPrompt;
