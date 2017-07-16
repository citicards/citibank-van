const {
  PROMPT_TYPE,
  LIST_ITEM_SELECTED,
  MENU_TITLE,
  MENU_TEXT,
  MENU_VALUE
} = require('./.constants');

function serviceVan(app) {
  const chooseVanOption = {
    type: PROMPT_TYPE.LIST,
    name: LIST_ITEM_SELECTED,
    message: MENU_TITLE.SELECT_VAN_OPTION,
    choices: [
      {
        name: app.chalk.yellow(MENU_TEXT.BACK),
        value: MENU_VALUE.BACK
      },
      {
        name: app.chalk.red(MENU_TEXT.CLOSE_VAN),
        value: MENU_VALUE.CLOSE
      }
    ]
  };

  Object.keys(app.selectedVan).forEach((key) => {
    console.log(app.chalk.cyan(`${key}: ${app.selectedVan[key]}`));
  });

  return app.prompt(chooseVanOption).then((promptResponse) => {
    if(promptResponse[LIST_ITEM_SELECTED] === MENU_VALUE.CLOSE) {
      return app.van.cancelVan(app.selectedCard, app.selectedVan).then((results) => {
        app.log.success(`card ${results.CPNPAN} closed successfully`);
        return app.displayCardOptionsPrompt();
      });
    }
    return app.displayCardOptionsPrompt();
  });
}

module.exports = serviceVan;
