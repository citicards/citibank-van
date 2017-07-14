function serviceVan(app) {
  const chooseVanOption = {
    type: 'list',
    name: 'optionSelected',
    message: 'Select an Option?',
    choices: [
      {
        name: app.chalk.yellow('<- Go Back'),
        value: 'back'
      },
      {
        name: app.chalk.red('  Close VAN'),
        value: 'close'
      }
    ]
  };

  Object.keys(app.selectedVan).forEach((key) => {
    console.log(app.chalk.cyan(`${key}: ${app.selectedVan[key]}`));
  });

  return app.prompt(chooseVanOption).then((vanPromptResults) => {
    if(vanPromptResults.optionSelected === 'close') {
      return app.van.cancelVan(app.selectedCard, app.selectedVan).then((results) => {
        console.log(app.chalk.green(`card ${results.CPNPAN} closed successfully`));
        return app.displayCardOptionsPrompt();
      });
    }
    return app.displayCardOptionsPrompt();
  });
}

module.exports = serviceVan;
