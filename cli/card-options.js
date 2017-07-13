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
      },
      {
        name: '  View Active Numbers',
        value: 2
      },
    ]
  };

  return app.prompt(chooseCreditCardOptionList).then((cardSelectPrompt) => {
    switch(cardSelectPrompt.optionSelected) {
    default:
      return app.displayCardSelectPrompt(app);
    }
  });
}

module.exports = cardOptionsPrompt;
