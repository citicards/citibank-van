function getActiveVansForACreditCard(app, card) {
  return app.request({
    WebcardType: 'SLIM',
    Start: '0',
    IssuerId: '1',
    MsgNo: '13',
    Locale: 'en',
    Request: 'GetActiveAccounts',
    Version: 'FLEXWEBCARD%2DCITI%5F4%5F0%5F547%5F0',
    Next: '20',
    VCardId: card.VCardId,
    CardType: card.CardType,
    SessionId: app.sessionId
  }).then(vans => {
    const conformedVans = app.conformListObjectToArray(vans);
    card.ActiveVans = app.conformListObjectToArray(vans);
    return conformedVans;
  });
}

module.exports = getActiveVansForACreditCard;
