import {
  LOCALE,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
  VERSION
} from './.constants';

export default function getActiveVansForACreditCard(app, card, start = 0, next = 20) {
  return app.request({
    WebcardType: WEBCARD_TYPE,
    Start: `${start}`,
    IssuerId: ISSUER_ID,
    MsgNo: app.getMsgNo(),
    Locale: LOCALE,
    Request: REQUEST.GET_ACTIVE_ACCOUNTS,
    Version: VERSION,
    Next: `${next}`,
    VCardId: card.VCardId,
    CardType: card.CardType,
    SessionId: app.sessionId
  }).then(vans => {
    const conformedVans = app.conformListObjectToArray(vans);
    card.ActiveVans = app.conformListObjectToArray(vans);
    return conformedVans;
  });
}
