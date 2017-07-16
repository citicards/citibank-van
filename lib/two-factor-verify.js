const {
  CYOTA,
  ISSUER_ID,
  WEBCARD_TYPE,
  REQUEST,
  SUB_EVENT
} = require('./.constants');

function selectTwoFactorVerifyMethod(app, verifyMethod) {
  return app.request({
    User: app.username,
    Type: verifyMethod.Id,
    WebcardType: WEBCARD_TYPE,
    Request: REQUEST.OTP_DELIVERY,
    CyotaTransactionId: CYOTA.SAMPLE_CYOTA_ID,
    IssuerId: ISSUER_ID,
    SessionId: app.sessionId
  });
}

function verifyTwoFactorCode(app, code) {
  return app.request({
    User: app.username,
    // This is actually what citi's VAN client sends as the Id. Not joking.
    CyotaTransactionId: CYOTA.LOAD_OF_PANTS,
    WebcardType: WEBCARD_TYPE,
    OTP: code,
    Request: REQUEST.VALIDATE_OTP,
    SubEvent: SUB_EVENT.VIEW,
    IssuerId: ISSUER_ID,
    SessionId: app.sessionId
  });
}

class TwoFactorVerify {
  constructor(app, cyotaId, verifyMethodsArray) {
    this.app = app;
    this.twoFactorNeeded = true;
    this.creditCards = app.creditCards;
    this.verifyMethods = verifyMethodsArray.filter((method) => method.Id !== 'Cannot receive code');
    this.cyotaId = cyotaId;
  }
  selectVerifyMethod(verifyMethod) {
    return selectTwoFactorVerifyMethod(this.app, verifyMethod);
  }
  verifyCode(code) {
    return verifyTwoFactorCode(this.app, code);
  }
}

module.exports = TwoFactorVerify;
