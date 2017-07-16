const ip = require('ip');

const {
  CYOTA,
  OVATION_BLACKBOX,
  USER_AGENT,
  LOCALE,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
  SUB_EVENT,
  VIRTUAL_ACCT_VERSION
} = require('./.constants');

function login(app) {
  return app.getCookies()
  .then(() => app.request({
    Password: app.password,
    CyotahttpAcceptEncoding: CYOTA.ACCEPT_ENCODING,
    IssuerId: ISSUER_ID,
    CyotahttpAcceptLanguage: CYOTA.ACCEPT_LANGUAGE,
    SubEvent: SUB_EVENT.LOGIN,
    VirtualAcctVersion: VIRTUAL_ACCT_VERSION,
    CyotaDevicePrint: CYOTA.DEVICE_PRINT,
    CyotahttpReferrer: CYOTA.HTTP_REFERRER,
    iOvationBlackbox: OVATION_BLACKBOX,
    CyotaIPAddress: ip.address(),
    Request: REQUEST.AUTHENTICATION,
    Locale: LOCALE,
    CyotaDeviceTokenFSO: CYOTA.DEVICE_TOKEN_FSO,
    CyotaUserAgent: USER_AGENT,
    User: app.username,
    CyotahttpAccept: CYOTA.HTTP_ACCEPT,
    CyotaDeviceTokenCookie: CYOTA.DEVICE_TOKEN_COOKIE,
    WebcardType: WEBCARD_TYPE,
    CyotahttpAcceptChars: CYOTA.HTTP_ACCEPT_CHARS
  })).then(() => {
    return app.getCreditCards();
  });
}

module.exports = login;
