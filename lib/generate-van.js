import {
  LOCALE,
  VERSION,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
  CPN_TYPE,
  INDICTOR
} from './.constants';

export default function generateVanForACard(app, card, spendLimit = false, NumberOfMonthsValidFor = false) {
  return app.checkIfTwoFactorNeeded().then(twoFactor => {
    if (twoFactor) {
      return twoFactor;
    }

    const vanRequestObject = {
      CPNType: CPN_TYPE.SP,
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
    };

    if (spendLimit || NumberOfMonthsValidFor) {
      vanRequestObject.CPNType = CPN_TYPE.MA;
      vanRequestObject.CumulativeLimit = String(spendLimit);
      vanRequestObject.ValidFor = String(NumberOfMonthsValidFor);
    }

    return app.request(vanRequestObject).then((results) => {
      return app.getActiveVansForACreditCard(card).then(() => results);
    });
  });
}
