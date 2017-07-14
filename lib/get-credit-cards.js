const promise = require('bluebird');

const {
  LOCALE,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
} = require('./.constants');

function getCards(app) {
  return app.request({
    Password: app.password,
    Request: REQUEST.GET_ACTIVE_CARDS,
    SessionId: app.sessionId,
    User: app.username,
    IssuerId: ISSUER_ID,
    WebcardType: WEBCARD_TYPE,
    Locale: LOCALE
  }).then(results => {
    app.usersNumberOfCreditCards = Number(results.Total);
    app.creditCards = app.conformListObjectToArray(results);
    return promise.each(app.creditCards, (card) => {
      return app.getActiveVansForACreditCard(card);
    }).then(() => app.creditCards);
  });
}

module.exports = getCards;
