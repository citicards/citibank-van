import ip from 'ip';

import {
  CYOTA,
  OVATION_BLACKBOX,
  LOCALE,
  VERSION,
  REQUEST,
  ISSUER_ID,
  ORIGIN_ID,
  VIRTUAL_ACCT_VERSION,
  SUB_EVENT,
  TYPE_OF_VIRTUAL_ACCT,
  USD_AMT
} from './.constants';

export default function checkIfTwoFactorNeeded(app) {
  const card = app.creditCards[0];
  return app.request({
    Request: REQUEST.RAN_RISK,
    CyotahttpAcceptEncoding: CYOTA.ACCEPT_ENCODING,
    VirtualAcctVersion: VIRTUAL_ACCT_VERSION,
    OriginID: ORIGIN_ID,
    CyotahttpAcceptLanguage: CYOTA.ACCEPT_LANGUAGE,
    Version: VERSION,
    VCardId: card.VCardId,
    CyotaDevicePrint: CYOTA.DEVICE_PRINT,
    CyotahttpReferrer: CYOTA.HTTP_REFERRER,
    SessionId: app.sessionId,
    iOvationBlackbox: OVATION_BLACKBOX,
    CyotaIPAddress: ip.address(),
    CyotaDeviceTokenCookie: CYOTA.DEVICE_TOKEN_COOKIE,
    MsgNo: app.getMsgNo(),
    TypeOfVirtualAcct: TYPE_OF_VIRTUAL_ACCT,
    CyotaDeviceTokenFSO: CYOTA.DEVICE_TOKEN_FSO,
    CyotaUserAgent: CYOTA.USER_AGENT,
    CyotahttpAccept: CYOTA.HTTP_ACCEPT,
    Locale: LOCALE,
    SubEvent: SUB_EVENT.GENERATE,
    IssuerId: ISSUER_ID,
    USDAmt: USD_AMT,
    CardType: card.CardType,
    CyotahttpAcceptChars: CYOTA.HTTP_ACCEPT_CHARS
  }).then(res => {
    if(res.CyotaTransactionId) {
      return app.twoFactorVerify(res.CyotaTransactionId, app.conformListObjectToArray(res));
    };
    return false;
  });
}
