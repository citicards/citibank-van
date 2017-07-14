const promise = require('bluebird');

function cancelVan(app, card, van) {
  return app.request({
    WebcardType: 'SLIM',
    MsgNo: app.getMsgNo(),
    CPNPAN: van.PAN,
    Locale: 'en',
    Request: 'CancelCPN',
    Version: 'FLEXWEBCARD%2DCITI%5F4%5F0%5F547%5F0',
    VCardId: card.VCardId,
    IssuerId: '1',
    CardType: card.CardType,
    SessionId: app.sessionId
  }).then(results => {
    return promise.each(app.creditCards, (creditcard) => {
      return app.getActiveVansForACreditCard(creditcard).then(vans => {
        creditcard.ActiveVans = vans;
      });
    }).then(() => results);
  });
}

module.exports = cancelVan;
