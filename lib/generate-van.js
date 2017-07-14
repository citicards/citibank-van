const {
  LOCALE,
  VERSION,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
  CPN_TYPE,
  INDICTOR
} = require('./.constants');

function generateCard(app, card) {
  return app.checkIfTwoFactorNeeded().then(twoFactor => {
    if (twoFactor) {
      return twoFactor;
    }
    return app.request({
      CPNType: CPN_TYPE,
      Locale: LOCALE,
      Version: VERSION,
      VCardId: card.VCardId,
      SessionId: app.sessionId,
      Indicator: INDICTOR,
      WebcardType: WEBCARD_TYPE,
      MsgNo: app.getMsgNo(),
      Request: REQUEST.GET_CPN,
      IssuerId: ISSUER_ID,
      CardType: card.CardType
    }).then((results) => {
      return app.getActiveVansForACreditCard(card).then(() => results);
    });
  });
}

module.exports = generateCard;
