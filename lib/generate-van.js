function generateCard(app, card) {
  return app.checkIfTwoFactorNeeded().then(twoFactor => {
    if (twoFactor) {
      return twoFactor;
    }
    return app.request({
      CPNType: 'SP',
      Locale: 'en',
      Version: 'FLEXWEBCARD%2DCITI%5F4%5F0%5F547%5F0',
      VCardId: card.VCardId,
      SessionId: app.sessionId,
      Indicator: 'VANGen',
      WebcardType: 'SLIM',
      MsgNo: app.getMsgNo(),
      Request: 'GetCPN',
      IssuerId: '1',
      CardType: card.CardType
    }).then((results) => {
      return app.getActiveVansForACreditCard(card).then(() => results);
    });
  });
}

module.exports = generateCard;
