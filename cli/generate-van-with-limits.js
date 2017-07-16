const {
  PROMPT_TYPE,
  MENU_TITLE,
  MENU_VALUE
} = require('./.constants');

function generateVanWithLimits(app) {
  return app.prompt([
    {
      type: PROMPT_TYPE.INPUT,
      message: MENU_TITLE.WHAT_IS_MAX_SPEND_LIMIT,
      name: MENU_VALUE.SPEND_LIMIT
    },
    {
      type: PROMPT_TYPE.INPUT,
      message: MENU_TITLE.HOW_MANY_MONTHS_VAN_GOOD_FOR,
      name: MENU_VALUE.NUMBER_OF_MONTHS_VALUD_FOR
    }
  ]).then((promptResponse) => {
    return app.van.generateVanForACreditCard(
      app.selectedCard,
      promptResponse[MENU_VALUE.SPEND_LIMIT],
      promptResponse[MENU_VALUE.NUMBER_OF_MONTHS_VALUD_FOR]
    ).then(results => {
      if (results.twoFactorNeeded) {
        return app.displayTwoFactorPrompt(results).then(() => {
          return app.van.generateVanForACreditCard(
            app.selectedCard,
            promptResponse[MENU_VALUE.SPEND_LIMIT],
            promptResponse[MENU_VALUE.NUMBER_OF_MONTHS_VALUD_FOR]
          );
        });
      }

      return results;
    }).then(newcard => {
      app.log.success(`\n---new card generated--\n\n  ${newcard.PAN} EXP: ${newcard.Expiry} CVV: ${newcard.AVV} \n\n`);
      return app.displayCardOptionsPrompt();
    });
  });
}

module.exports = generateVanWithLimits;
