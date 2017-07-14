function selectTwoFactorVerifyMethod(app, methodId) {
  return app.request({
    User: app.username,
    Type: methodId,
    WebcardType: 'SLIM',
    Request: 'OTPDelivery',
    CyotaTransactionId: 'sample_cyota_id',
    IssuerId: '1',
    SessionId: app.sessionId
  });
}

function verifyTwoFactorCode(app, code) {
  return app.request({
    User: app.username,
    // This is actually what citi's VAN client sends as the Id. Not joking.
    CyotaTransactionId: 'loadofpants',
    WebcardType: 'SLIM',
    OTP: code,
    Request: 'ValidateOTP',
    SubEvent: 'view',
    IssuerId: '1',
    SessionId: app.sessionId
  });
}

class TwoFactorVerify {
  constructor(app, cyotaId, verifyMethodsArray) {
    this.app = app;
    this.twoFactorNeeded = true;
    this.creditCards = app.creditCards;
    this.verifyMethods = verifyMethodsArray;
    this.cyotaId = cyotaId;
  }
  selectVerifyMethod(methodId) {
    return selectTwoFactorVerifyMethod(this.app, methodId);
  }
  verifyCode(code) {
    return verifyTwoFactorCode(this.app, code);
  }
}

module.exports = TwoFactorVerify;
