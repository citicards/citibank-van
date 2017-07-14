const promise = require('bluebird');

function getCards(app) {
  return app.request({
    Password: app.password,
    Request: 'GetActiveCards',
    SessionId: app.sessionId,
    User: app.username,
    IssuerId: '1',
    WebcardType: 'SLIM',
    Locale: 'en'
  }).then(results => {
    app.usersNumberOfCreditCards = Number(results.Total);
    app.creditCards = app.conformListObjectToArray(results);
    return promise.each(app.creditCards, (card) => {
      return app.getActiveVansForACreditCard(card);
    }).then(() => app.creditCards);
  });
}

module.exports = getCards;
