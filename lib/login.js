const ip = require('ip');
const {
  CYOTA_DEVICE_PRINT,
  OVATION_BLACKBOX,
  USER_AGENT
} = require('./.constants');

function login(app) {
  return app.getCookies()
    .then(() => app.request({
      Password: app.password,
      CyotahttpAcceptEncoding: 'gzip',
      IssuerId: '1',
      CyotahttpAcceptLanguage: 'en-US',
      SubEvent: 'login',
      VirtualAcctVersion: 'DOWNLOAD',
      CyotaDevicePrint: CYOTA_DEVICE_PRINT,
      CyotahttpReferrer: '',
      iOvationBlackbox: OVATION_BLACKBOX,
      CyotaIPAddress: ip.address(),
      Request: 'Authentication',
      Locale: 'en',
      CyotaDeviceTokenFSO: '',
      CyotaUserAgent: USER_AGENT,
      User: app.username,
      CyotahttpAccept: '*%252F*',
      CyotaDeviceTokenCookie: '1',
      WebcardType: 'SLIM',
      CyotahttpAcceptChars: ''
    })).then(() => {
      return app.getCreditCards();
    });
}

module.exports = login;
