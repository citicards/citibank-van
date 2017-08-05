import {
  PROMPT_TYPE,
  LIST_ITEM_SELECTED,
  MENU_TEXT,
  MENU_TITLE
} from './.constants';

export default function cardSelectPrompt(app) {
  const chooseCreditCardList = {
    type: PROMPT_TYPE.LIST,
    name: LIST_ITEM_SELECTED,
    message: MENU_TITLE.WHICH_CARD_TO_GENERATE_VANS_FOR,
    choices: []
  };
  chooseCreditCardList.choices.push({
    name: app.chalk.yellow(MENU_TEXT.EXIT),
    value: null
  });
  app.creditCards.forEach((card, i) => {
    chooseCreditCardList.choices.push({
      name: app.chalk.cyan(`  ${card.CardholderName} ############${String(card.PAN)}`),
      value: i
    });
  });

  return app.prompt(chooseCreditCardList).then((promptResponse) => {
    if (promptResponse[LIST_ITEM_SELECTED] === null) {
      return app.exitSelected();
    }

    app[LIST_ITEM_SELECTED] = promptResponse[LIST_ITEM_SELECTED];
    app.selectedCard = app.creditCards[app[LIST_ITEM_SELECTED]];

    return app.displayCardOptionsPrompt(app);
  });
}
