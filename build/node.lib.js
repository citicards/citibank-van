module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ISSUER_ID = exports.ISSUER_ID = '1';
var VERSION = exports.VERSION = 'FLEXWEBCARD-CITI_4_0_547_0';
var LOCALE = exports.LOCALE = 'en';
var WEBCARD_TYPE = exports.WEBCARD_TYPE = 'SLIM';
var ORIGIN_ID = exports.ORIGIN_ID = '';
var VIRTUAL_ACCT_VERSION = exports.VIRTUAL_ACCT_VERSION = 'DOWNLOAD';
var TYPE_OF_VIRTUAL_ACCT = exports.TYPE_OF_VIRTUAL_ACCT = 'VAN';
var USD_AMT = exports.USD_AMT = '';
var INDICTOR = exports.INDICTOR = 'VANGen';

var CPN_TYPE = exports.CPN_TYPE = {
  SP: 'SP',
  MA: 'MA'
};

var URLS = exports.URLS = {
  BASE_URL: 'https://online.citi.com',
  APPLET_SUB_URL: '/Athena/WebServlet',
  COOKIES_SUB_URL: '/US/VAN/webcard/ranwebcard.jsp?brand=Citi&slim=true'
};

var SUB_EVENT = exports.SUB_EVENT = {
  LOGIN: 'login',
  VIEW: 'view',
  GENERATE: 'generate'
};

var REQUEST = exports.REQUEST = {
  CANCEL_CPN: 'CancelCPN',
  GET_CPN: 'GetCPN',
  GET_ACTIVE_CARDS: 'GetActiveCards',
  AUTHENTICATION: 'Authentication',
  OTP_DELIVERY: 'OTPDelivery',
  VALIDATE_OTP: 'ValidateOTP',
  GET_ACTIVE_ACCOUNTS: 'GetActiveAccounts',
  RAN_RISK: 'RANRisk'
};

var CYOTA = exports.CYOTA = {
  ACCEPT_ENCODING: 'gzip',
  ACCEPT_LANGUAGE: 'en-US',
  HTTP_ACCEPT: '*/*',
  HTTP_ACCEPT_CHARS: '',
  DEVICE_TOKEN_COOKIE: '1',
  DEVICE_TOKEN_FSO: '',
  HTTP_REFERRER: '',
  SAMPLE_CYOTA_ID: 'sample_cyota_id',
  LOAD_OF_PANTS: 'loadofpants',
  USER_AGENT: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729)',
  DEVICE_PRINT: 'version=2&pm_fpua=mozilla/4.0 (compatible; msie 7.0; windows nt 6.2; wow64; trident/7.0; .net4.0e; .net4.0c; .net clr 3.5.30729; .net clr 2.0.50727; .net clr 3.0.30729)|4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729)|Win32|0|x86|en-US|18739&pm_fpsc=32|1920|1080|1080&pm_fpsw=abk=6,3,9600,17415|dht=11,0,9600,18739|ieh=11,0,9600,18739|iee=6,3,9600,18739|wmp=12,0,9600,18438|obp=11,0,9600,18739|oex=6,3,9600,17415&pm_fptz=-4&pm_fpln=lang=en-US|syslang=en-US|userlang=en-US&pm_fpjv=1&pm_fpco=1&pm_fpasw=&pm_fpan=Microsoft Internet Explorer&pm_fpacn=Mozilla&pm_fpol=true&pm_fposp=&pm_fpup=&pm_fpsaw=1920&pm_fpspd=&pm_fpsbd=0&pm_fpsdx=96&pm_fpsdy=96&pm_fpslx=96&pm_fpsly=96&pm_fpsfse=true&pm_fpsui=0'
};

var OVATION_BLACKBOX = exports.OVATION_BLACKBOX = '0400nyhffR vPCUNf94lis1ztslx6CM6kh71EwmdU5pwECEO41dOg52P6CTlL/qCwCuqnCA2AVXtfyB09goHrD3QuUK5xp HG9GE7tjCQkotdjQw5xWQZwLvBK3AVNJ9bSaWDIKINVrQrNLcRehbfBGuV3dYcifmtkxPNmXQ9ibaX8ENczN14q3lywh3sf2PehRXzxRh3xo8sP3xwUJvdekrQjmYH7238d1UhH63W0JS9EmFAlPKT0bZ0hatzkWpnWI7wTbkqlmBR5MF6EZzbXoGNN59HEXmMHxLwBvzVf/kqtLd5LTcBxyXSOlqWhTCsvxKYuRKa4SnVmrDJHzHkD8s4INYU/TI6xDHIk58X3QGmlnCzrg4rEj1eSa2WrIxc0W3ToPDFOCOlaWD7zl7KVjHLwrtlZ3ZPYc61DwawH2AMLQpTOKngml6yQZLhqCKRUOm0Zo3B7DT/kGDRtHpihj4KszV7Y8/QweFQh28S34xskSFa2zpuxtfRg4mmYKxVbRr77A/AHthzIQI07p4tGGHBe8mR20/oWqfhp3GWZvlfT/AqvQx/6iBZk5svk/NHrqcwWvElLVZ9TI3wt1gJSvYqtT16TeM5diEHf7WUtiodkRiAwV4KReA9bnw5KaWZ4pwxKmKi0E5mbItH5CLMJiFqNsezWDjDReYZ3ickyxF24hP4ehBV15lxEJ9p9DAJOHN snP9 SWhwxVxvHWf/uK445lNi covQlQ6y/ XfUDxdOq87auE3RWwyPd429Hc3XdHevRMsQLV98QdbSEOzcFuJafdvdDoYMHj6A4Tcw/50G6zloCUZZHzyeVqoVts3c7lsEFJXsZtNN9udxoITTbiz8nSCU2KD2n3qkM 8stAl7efp Njoxvg7ycAS4aoAe OYeNGYFn8Zui1Avp7zeygF7dmSFCZofxesfxXV871ILuV2UGFOpoPjmHjRmBZ/G hRusOQCRRHHveWpqXQBjvetIl8o4OkdnJhw/5Aifauo6HA/vCd7wG5ogZ6Ep/KlKYu3FTTPsnmSBBWhu07LmRdt5U4CpewIj2qku3ZkvznZVzOB5EWm0d59HEXmMHxLwBvzVf/kqtLd5LTcBxyXSOlqWhTCsvxKYuRKa4SnVmrDJHzHkD8s4INYU/TI6xDHIk58X3QGmlnCzrg4rEj1eSa2WrIxc0W3ToPDFOCOlaVByXXGibnU2eshaHYP8Oq6k cVXJiV2yKAmeNHH6 w6iz6EaCFtwC6BHoC4lgrgEUQvvB9rpoBsiXN6n4slkSKc/XUz3IPsvxZrWwOnRUCedIQCcOsuVGBxTT7WbryzK6ir3bqElBGMlq44NyGTZasfYs6ZVAotR3xVajijX/olNaNWTFA98K1RZ7hgn53zo3l 0b4vf7xh4aDM05YG1/He34vRamSkybNP 3fQNqB1B9qRtrgJ79NlU99UoH2xklIc/w4WKV7Fr80sU7WXPzI6TmrPLx jAuRcSQpdLa5/31hL1iiG6hM8L27AT1LPr7maXtSl2UmmkzwyBQB1XB6kCEXU1KksDScbq6F4grLRiMiVJIpn96N';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _login2 = __webpack_require__(6);

var _login3 = _interopRequireDefault(_login2);

var _generateVan = __webpack_require__(7);

var _generateVan2 = _interopRequireDefault(_generateVan);

var _getCreditCards2 = __webpack_require__(8);

var _getCreditCards3 = _interopRequireDefault(_getCreditCards2);

var _getActiveVans = __webpack_require__(9);

var _getActiveVans2 = _interopRequireDefault(_getActiveVans);

var _cancelVan2 = __webpack_require__(10);

var _cancelVan3 = _interopRequireDefault(_cancelVan2);

var _twoFactorVerify = __webpack_require__(11);

var _twoFactorVerify2 = _interopRequireDefault(_twoFactorVerify);

var _checkForTwoFactor = __webpack_require__(12);

var _checkForTwoFactor2 = _interopRequireDefault(_checkForTwoFactor);

var _conformResponseToJson = __webpack_require__(13);

var _conformResponseToJson2 = _interopRequireDefault(_conformResponseToJson);

var _conformJsonToRequest = __webpack_require__(14);

var _conformJsonToRequest2 = _interopRequireDefault(_conformJsonToRequest);

var _conformListobjectToArray = __webpack_require__(15);

var _conformListobjectToArray2 = _interopRequireDefault(_conformListobjectToArray);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CitibankVAN = function () {
  function CitibankVAN() {
    var _this = this;

    _classCallCheck(this, CitibankVAN);

    this.baseAxios = _axios2.default.create({
      baseURL: _constants.URLS.BASE_URL,
      withCredentials: true
    });
    this.api = {
      get: function get() {
        var _baseAxios;

        return (_baseAxios = _this.baseAxios).get.apply(_baseAxios, arguments).then(_this.conformResponseToJSON());
      },
      post: function post() {
        var _baseAxios2;

        return (_baseAxios2 = _this.baseAxios).post.apply(_baseAxios2, arguments).then(_this.conformResponseToJSON());
      },
      put: function put() {
        var _baseAxios3;

        return (_baseAxios3 = _this.baseAxios).put.apply(_baseAxios3, arguments).then(_this.conformResponseToJSON());
      },
      del: function del() {
        var _baseAxios4;

        return (_baseAxios4 = _this.baseAxios).del.apply(_baseAxios4, arguments).then(_this.conformResponseToJSON());
      }
    };
    this.creditCards = [];
    this.MsgNo = 0;
    this.request = function (requestObject) {
      return _this.api.post(_constants.URLS.APPLET_SUB_URL, _this.conformJSONtoRequest(requestObject));
    };
  }

  _createClass(CitibankVAN, [{
    key: 'conformResponseToJSON',
    value: function conformResponseToJSON() {
      return (0, _conformResponseToJson2.default)(this);
    }
  }, {
    key: 'conformJSONtoRequest',
    value: function conformJSONtoRequest(jsonObject) {
      return (0, _conformJsonToRequest2.default)(this)(jsonObject);
    }
  }, {
    key: 'conformListObjectToArray',
    value: function conformListObjectToArray(jsonObject) {
      return (0, _conformListobjectToArray2.default)(jsonObject);
    }
  }, {
    key: 'getCookies',
    value: function getCookies() {
      return this.api.get(_constants.URLS.COOKIES_SUB_URL);
    }
  }, {
    key: 'getMsgNo',
    value: function getMsgNo() {
      this.MsgNo++;
      return this.MsgNo;
    }
  }, {
    key: 'login',
    value: function login(username, password) {
      this.username = username;
      this.password = password;
      return (0, _login3.default)(this);
    }
  }, {
    key: 'checkIfTwoFactorNeeded',
    value: function checkIfTwoFactorNeeded() {
      return (0, _checkForTwoFactor2.default)(this);
    }
  }, {
    key: 'getCreditCards',
    value: function getCreditCards() {
      return (0, _getCreditCards3.default)(this);
    }
  }, {
    key: 'generateVanForACreditCard',
    value: function generateVanForACreditCard(card, spendLimit, NumberOfMonthsValidFor) {
      return (0, _generateVan2.default)(this, card, spendLimit, NumberOfMonthsValidFor);
    }
  }, {
    key: 'getActiveVansForACreditCard',
    value: function getActiveVansForACreditCard(card) {
      return (0, _getActiveVans2.default)(this, card);
    }
  }, {
    key: 'twoFactorVerify',
    value: function twoFactorVerify(cyotaId, verifyMethodsArray) {
      return new _twoFactorVerify2.default(this, cyotaId, verifyMethodsArray);
    }
  }, {
    key: 'cancelVan',
    value: function cancelVan(card, van) {
      return (0, _cancelVan3.default)(this, card, van);
    }
  }]);

  return CitibankVAN;
}();

exports.default = CitibankVAN;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _ip = __webpack_require__(1);

var _ip2 = _interopRequireDefault(_ip);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(app) {
  return app.getCookies().then(function () {
    return app.request({
      Password: app.password,
      CyotahttpAcceptEncoding: _constants.CYOTA.ACCEPT_ENCODING,
      IssuerId: _constants.ISSUER_ID,
      CyotahttpAcceptLanguage: _constants.CYOTA.ACCEPT_LANGUAGE,
      SubEvent: _constants.SUB_EVENT.LOGIN,
      VirtualAcctVersion: _constants.VIRTUAL_ACCT_VERSION,
      CyotaDevicePrint: _constants.CYOTA.DEVICE_PRINT,
      CyotahttpReferrer: _constants.CYOTA.HTTP_REFERRER,
      iOvationBlackbox: _constants.OVATION_BLACKBOX,
      CyotaIPAddress: _ip2.default.address(),
      Request: _constants.REQUEST.AUTHENTICATION,
      Locale: _constants.LOCALE,
      CyotaDeviceTokenFSO: _constants.CYOTA.DEVICE_TOKEN_FSO,
      CyotaUserAgent: _constants.USER_AGENT,
      User: app.username,
      CyotahttpAccept: _constants.CYOTA.HTTP_ACCEPT,
      CyotaDeviceTokenCookie: _constants.CYOTA.DEVICE_TOKEN_COOKIE,
      WebcardType: _constants.WEBCARD_TYPE,
      CyotahttpAcceptChars: _constants.CYOTA.HTTP_ACCEPT_CHARS
    });
  }).then(function () {
    return app.getCreditCards();
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateVanForACard;

var _constants = __webpack_require__(0);

function generateVanForACard(app, card) {
  var spendLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var NumberOfMonthsValidFor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  return app.checkIfTwoFactorNeeded().then(function (twoFactor) {
    if (twoFactor) {
      return twoFactor;
    }

    var vanRequestObject = {
      CPNType: _constants.CPN_TYPE.SP,
      Locale: _constants.LOCALE,
      Version: _constants.VERSION,
      VCardId: card.VCardId,
      SessionId: app.sessionId,
      Indicator: _constants.INDICTOR,
      WebcardType: _constants.WEBCARD_TYPE,
      MsgNo: app.getMsgNo(),
      Request: _constants.REQUEST.GET_CPN,
      IssuerId: _constants.ISSUER_ID,
      CardType: card.CardType
    };

    if (spendLimit || NumberOfMonthsValidFor) {
      vanRequestObject.CPNType = _constants.CPN_TYPE.MA;
      vanRequestObject.CumulativeLimit = String(spendLimit);
      vanRequestObject.ValidFor = String(NumberOfMonthsValidFor);
    }

    return app.request(vanRequestObject).then(function (results) {
      return app.getActiveVansForACreditCard(card).then(function () {
        return results;
      });
    });
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCards;

var _bluebird = __webpack_require__(2);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCards(app) {
  return app.request({
    Password: app.password,
    Request: _constants.REQUEST.GET_ACTIVE_CARDS,
    SessionId: app.sessionId,
    User: app.username,
    IssuerId: _constants.ISSUER_ID,
    WebcardType: _constants.WEBCARD_TYPE,
    Locale: _constants.LOCALE
  }).then(function (results) {
    app.usersNumberOfCreditCards = Number(results.Total);
    app.creditCards = app.conformListObjectToArray(results);
    return _bluebird2.default.each(app.creditCards, function (card) {
      return app.getActiveVansForACreditCard(card);
    }).then(function () {
      return app.creditCards;
    });
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getActiveVansForACreditCard;

var _constants = __webpack_require__(0);

function getActiveVansForACreditCard(app, card) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var next = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;

  return app.request({
    WebcardType: _constants.WEBCARD_TYPE,
    Start: '' + start,
    IssuerId: _constants.ISSUER_ID,
    MsgNo: app.getMsgNo(),
    Locale: _constants.LOCALE,
    Request: _constants.REQUEST.GET_ACTIVE_ACCOUNTS,
    Version: _constants.VERSION,
    Next: '' + next,
    VCardId: card.VCardId,
    CardType: card.CardType,
    SessionId: app.sessionId
  }).then(function (vans) {
    var conformedVans = app.conformListObjectToArray(vans);
    card.ActiveVans = app.conformListObjectToArray(vans);
    return conformedVans;
  });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cancelVan;

var _bluebird = __webpack_require__(2);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelVan(app, card, van) {
  return app.request({
    WebcardType: _constants.WEBCARD_TYPE,
    MsgNo: app.getMsgNo(),
    CPNPAN: van.PAN,
    Locale: _constants.LOCALE,
    Request: _constants.REQUEST.CANCEL_CPN,
    Version: _constants.VERSION,
    VCardId: card.VCardId,
    IssuerId: _constants.ISSUER_ID,
    CardType: card.CardType,
    SessionId: app.sessionId
  }).then(function (results) {
    return _bluebird2.default.each(app.creditCards, function (creditcard) {
      return app.getActiveVansForACreditCard(creditcard).then(function (vans) {
        creditcard.ActiveVans = vans;
      });
    }).then(function () {
      return results;
    });
  });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function selectTwoFactorVerifyMethod(app, verifyMethod) {
  return app.request({
    User: app.username,
    Type: verifyMethod.Id,
    WebcardType: _constants.WEBCARD_TYPE,
    Request: _constants.REQUEST.OTP_DELIVERY,
    CyotaTransactionId: _constants.CYOTA.SAMPLE_CYOTA_ID,
    IssuerId: _constants.ISSUER_ID,
    SessionId: app.sessionId
  });
}

function verifyTwoFactorCode(app, code) {
  return app.request({
    User: app.username,
    // This is actually what citi's VAN client sends as the Id. Not joking.
    CyotaTransactionId: _constants.CYOTA.LOAD_OF_PANTS,
    WebcardType: _constants.WEBCARD_TYPE,
    OTP: code,
    Request: _constants.REQUEST.VALIDATE_OTP,
    SubEvent: _constants.SUB_EVENT.VIEW,
    IssuerId: _constants.ISSUER_ID,
    SessionId: app.sessionId
  });
}

var TwoFactorVerify = function () {
  function TwoFactorVerify(app, cyotaId, verifyMethodsArray) {
    _classCallCheck(this, TwoFactorVerify);

    this.app = app;
    this.twoFactorNeeded = true;
    this.creditCards = app.creditCards;
    this.verifyMethods = verifyMethodsArray.filter(function (method) {
      return method.Id !== 'Cannot receive code';
    });
    this.cyotaId = cyotaId;
  }

  _createClass(TwoFactorVerify, [{
    key: 'selectVerifyMethod',
    value: function selectVerifyMethod(verifyMethod) {
      return selectTwoFactorVerifyMethod(this.app, verifyMethod);
    }
  }, {
    key: 'verifyCode',
    value: function verifyCode(code) {
      return verifyTwoFactorCode(this.app, code);
    }
  }]);

  return TwoFactorVerify;
}();

exports.default = TwoFactorVerify;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIfTwoFactorNeeded;

var _ip = __webpack_require__(1);

var _ip2 = _interopRequireDefault(_ip);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkIfTwoFactorNeeded(app) {
  var card = app.creditCards[0];
  return app.request({
    Request: _constants.REQUEST.RAN_RISK,
    CyotahttpAcceptEncoding: _constants.CYOTA.ACCEPT_ENCODING,
    VirtualAcctVersion: _constants.VIRTUAL_ACCT_VERSION,
    OriginID: _constants.ORIGIN_ID,
    CyotahttpAcceptLanguage: _constants.CYOTA.ACCEPT_LANGUAGE,
    Version: _constants.VERSION,
    VCardId: card.VCardId,
    CyotaDevicePrint: _constants.CYOTA.DEVICE_PRINT,
    CyotahttpReferrer: _constants.CYOTA.HTTP_REFERRER,
    SessionId: app.sessionId,
    iOvationBlackbox: _constants.OVATION_BLACKBOX,
    CyotaIPAddress: _ip2.default.address(),
    CyotaDeviceTokenCookie: _constants.CYOTA.DEVICE_TOKEN_COOKIE,
    MsgNo: app.getMsgNo(),
    TypeOfVirtualAcct: _constants.TYPE_OF_VIRTUAL_ACCT,
    CyotaDeviceTokenFSO: _constants.CYOTA.DEVICE_TOKEN_FSO,
    CyotaUserAgent: _constants.CYOTA.USER_AGENT,
    CyotahttpAccept: _constants.CYOTA.HTTP_ACCEPT,
    Locale: _constants.LOCALE,
    SubEvent: _constants.SUB_EVENT.GENERATE,
    IssuerId: _constants.ISSUER_ID,
    USDAmt: _constants.USD_AMT,
    CardType: card.CardType,
    CyotahttpAcceptChars: _constants.CYOTA.HTTP_ACCEPT_CHARS
  }).then(function (res) {
    if (res.CyotaTransactionId) {
      return app.twoFactorVerify(res.CyotaTransactionId, app.conformListObjectToArray(res));
    };
    return false;
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conformResponseToJSON;

var _url = __webpack_require__(3);

function conformResponseToJSON(app) {
  return function (results) {
    var parsedResults = new _url.URLSearchParams(results.data);
    function keyShouldBeReturned(key) {
      return key !== 'Dummy' && key !== 'Eof' && key !== 'Action' && key !== 'SessionId' && key !== 'Indicator';
    };
    var data = {};
    parsedResults.forEach(function (value, key) {
      if (keyShouldBeReturned(key)) {
        data[key] = value;
      }
      if (key === 'SessionId') {
        app.sessionId = value;
      }
    });
    if (data.ErrMsg) {
      throw data;
    }
    return data;
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conformJSONToRequest;

var _url = __webpack_require__(3);

function conformJSONToRequest(app) {
  return function (jsonRequestObject) {
    var requestURLSearchParams = new _url.URLSearchParams();
    Object.keys(jsonRequestObject).forEach(function (key) {
      requestURLSearchParams.set(key, jsonRequestObject[key]);
    });
    return requestURLSearchParams.toString();
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conformListObjectToArray;
function conformListObjectToArray(listObject) {
  var list = [];

  Object.keys(listObject).forEach(function (key) {
    var lastLetterInKey = key.substring(key.length - 1, key.length);
    if (!isNaN(lastLetterInKey)) {
      var itemNumber = Number(lastLetterInKey);
      if (!list[itemNumber - 1]) {
        list[itemNumber - 1] = {};
      }
      list[itemNumber - 1][key.substring(0, key.length - 1)] = listObject[key];
    }
  });

  return list;
}

/***/ })
/******/ ]);
//# sourceMappingURL=node.lib.js.map