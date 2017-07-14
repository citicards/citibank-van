const {
  CYOTA_DEVICE_PRINT,
  OVATION_BLACKBOX,
  USER_AGENT
} = require('./.constants');

function checkIfTwoFactorNeeded(app) {
  const card = app.creditCards[0];
  return app.request({
    Request: 'RANRisk',
    CyotahttpAcceptEncoding: 'gzip',
    VirtualAcctVersion: 'DOWNLOAD',
    OriginID: '',
    CyotahttpAcceptLanguage: 'en%2DUS',
    Version: 'FLEXWEBCARD%2DCITI%5F4%5F0%5F547%5F0',
    VCardId: card.VCardId,
    CyotaDevicePrint: CYOTA_DEVICE_PRINT,
    CyotahttpReferrer: '',
    SessionId: app.sessionId,
    iOvationBlackbox: OVATION_BLACKBOX,
    CyotaIPAddress: '24%2E170%2E200%2E80',
    CyotaDeviceTokenCookie: '1',
    MsgNo: app.getMsgNo(),
    TypeOfVirtualAcct: 'VAN',
    CyotaDeviceTokenFSO: '',
    CyotaUserAgent: USER_AGENT,
    CyotahttpAccept: '%2A%25252F%2A',
    Locale: 'en',
    SubEvent: 'generate',
    IssuerId: '1',
    USDAmt: '',
    CardType: card.CardType,
    CyotahttpAcceptChars: ''
  }).then(res => {
    if(res.CyotaTransactionId) {
      return app.twoFactorVerify(res.CyotaTransactionId, app.conformListObjectToArray(res));
    };
    return false;
  });
}

module.exports = checkIfTwoFactorNeeded;
