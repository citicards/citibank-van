import promise from 'bluebird';

import {
  LOCALE,
  VERSION,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
} from './.constants';

export default function cancelVan(app, card, van) {
  return app.request({
    WebcardType: WEBCARD_TYPE,
    MsgNo: app.getMsgNo(),
    CPNPAN: van.PAN,
    Locale: LOCALE,
    Request: REQUEST.CANCEL_CPN,
    Version: VERSION,
    VCardId: card.VCardId,
    IssuerId: ISSUER_ID,
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
