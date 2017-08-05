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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GOODBYE = exports.GOODBYE = 'Goodbye';
var DISCLAIMER = exports.DISCLAIMER = 'Disclaimer: This product is not associated with Citibank in any way whatsoever and they should not be contacted for help with this app.  Please locate this app on github and open an issue on the issues page. This is app is distributed under the MIT license and is provided without warrenty and does guarantee any security or lack there of.  Use it at your own risk.';
var LOGGING_IN = exports.LOGGING_IN = '...logging in, getting all creditcards and active vans for each creditcard';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'logged in successfully';
var PASSWORD = exports.PASSWORD = 'password';
var USERNAME = exports.USERNAME = 'username';
var LIST_ITEM_SELECTED = exports.LIST_ITEM_SELECTED = 'list-item-selected';

var PROMPT_TYPE = exports.PROMPT_TYPE = {
  INPUT: 'input',
  PASSWORD: 'password',
  LIST: 'list'
};

var MENU_TITLE = exports.MENU_TITLE = {
  PRIMARY_HEADER: '=== Citicards.com Virtual Account Number Login ===',
  SELECT_VAN_OPTION: 'Select an option for the selected virtual account numer',
  SELECT_CREDIT_CARD: 'Which credit card do you want to use?',
  SELECT_CREDIT_CARD_OPTION: 'Select an option for the selected credit card',
  WHICH_CARD_TO_GENERATE_VANS_FOR: 'Which credit card do you want to service VAN\'s for?',
  ACTIVE_VANS: '----Active Vans----',
  NO_ACTIVE_VANS_FOUND: '  No Active Vans Found',
  WHAT_IS_MAX_SPEND_LIMIT: 'What is the maximum dollar amount that can be spent on this card?',
  ENTER_CODE_RECEIVED: 'Enter the code you received from citibank',
  HOW_MANY_MONTHS_VAN_GOOD_FOR: 'How many months is this van good for?'
};

var MENU_TEXT = exports.MENU_TEXT = {
  EXIT: '<-- Exit',
  BACK: '<-- Back',
  CLOSE_VAN: '  Close VAN',
  GENERATE_VAN_WITH_NO_LIMITS: '  Generate New Virtual Account Number with no limits',
  GENERATE_VAN_WITH_LIMITS: '  Generate New Virtual Account Number with limits'
};

var MENU_VALUE = exports.MENU_VALUE = {
  EXIT: 'exit',
  BACK: 'back',
  CLOSE: 'close',
  GENERATE_VAN_WITH_NO_LIMITS: 'generate-van-no-limits',
  GENERATE_VAN_WITH_LIMITS: 'generate-van-with-limits',
  CODE: 'code',
  SPEND_LIMIT: 'spendLimit',
  NUMBER_OF_MONTHS_VALUD_FOR: 'numberOfMonthsValidFor'
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

var _sourceMapSupport = __webpack_require__(27);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

var app = new _app2.default();
app.init();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = __webpack_require__(7);

var _lib2 = _interopRequireDefault(_lib);

var _chalk = __webpack_require__(19);

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = __webpack_require__(20);

var _inquirer2 = _interopRequireDefault(_inquirer);

var _login = __webpack_require__(21);

var _login2 = _interopRequireDefault(_login);

var _cardSelect = __webpack_require__(22);

var _cardSelect2 = _interopRequireDefault(_cardSelect);

var _cardOptions = __webpack_require__(23);

var _cardOptions2 = _interopRequireDefault(_cardOptions);

var _serviceVan = __webpack_require__(24);

var _serviceVan2 = _interopRequireDefault(_serviceVan);

var _twoFactor = __webpack_require__(25);

var _twoFactor2 = _interopRequireDefault(_twoFactor);

var _generateVanWithLimits = __webpack_require__(26);

var _generateVanWithLimits2 = _interopRequireDefault(_generateVanWithLimits);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    this.van = new _lib2.default();
    this.chalk = _chalk2.default;
    this.inquirer = _inquirer2.default;
    this.prompt = _inquirer2.default.createPromptModule();
    this.log = {
      warn: function warn() {
        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        return _this.logColor.apply(_this, ['yellow'].concat(params));
      },
      warning: function warning() {
        for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }

        return _this.logColor.apply(_this, ['yellow'].concat(params));
      },
      error: function error() {
        for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          params[_key3] = arguments[_key3];
        }

        return _this.logColor.apply(_this, ['red'].concat(params));
      },
      info: function info() {
        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          params[_key4] = arguments[_key4];
        }

        return _this.logColor.apply(_this, ['cyan'].concat(params));
      },
      success: function success() {
        for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          params[_key5] = arguments[_key5];
        }

        return _this.logColor.apply(_this, ['green'].concat(params));
      }
    };
  }

  _createClass(App, [{
    key: 'logColor',
    value: function logColor(color) {
      var _console;

      var colorizedParams = [];

      for (var _len6 = arguments.length, params = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        params[_key6 - 1] = arguments[_key6];
      }

      params.forEach(function (param) {
        if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object') {
          colorizedParams.push(_chalk2.default[color](param));
        } else {
          colorizedParams.push(param);
        }
      });
      (_console = console).log.apply(_console, colorizedParams);
    }
  }, {
    key: 'handleError',
    value: function handleError(functionName) {
      var _this2 = this;

      return function (error) {
        return _this2.log.error('An Error Occured on ' + functionName + '\n', error);
      };
    }
  }, {
    key: 'init',
    value: function init() {
      console.log('\n', _chalk2.default.bgRed(_constants.DISCLAIMER), '\n');
      this.log.info(_constants.MENU_TITLE.PRIMARY_HEADER);
      return this.displayLoginPrompt().catch(this.handleError('Unknown'));
    }
  }, {
    key: 'displayServiceVanPrompt',
    value: function displayServiceVanPrompt() {
      return (0, _serviceVan2.default)(this).catch(this.handleError('editVanPrompt'));
    }
  }, {
    key: 'displayLoginPrompt',
    value: function displayLoginPrompt() {
      return (0, _login2.default)(this).catch(this.handleError('loginPrompt'));
    }
  }, {
    key: 'displayCardSelectPrompt',
    value: function displayCardSelectPrompt() {
      return (0, _cardSelect2.default)(this).catch(this.handleError('cardSelectPrompt'));
    }
  }, {
    key: 'displayTwoFactorPrompt',
    value: function displayTwoFactorPrompt(twoFactorObject) {
      return (0, _twoFactor2.default)(this, twoFactorObject).catch(this.handleError('cardSelectPrompt'));
    }
  }, {
    key: 'displayCardOptionsPrompt',
    value: function displayCardOptionsPrompt() {
      return (0, _cardOptions2.default)(this).catch(this.handleError('cardOptionsPrompt'));
    }
  }, {
    key: 'displayGenerateVanWithLimitsPrompt',
    value: function displayGenerateVanWithLimitsPrompt() {
      return (0, _generateVanWithLimits2.default)(this);
    }
  }, {
    key: 'exitSelected',
    value: function exitSelected() {
      this.log.success(_constants.GOODBYE);
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _login2 = __webpack_require__(9);

var _login3 = _interopRequireDefault(_login2);

var _generateVan = __webpack_require__(10);

var _generateVan2 = _interopRequireDefault(_generateVan);

var _getCreditCards2 = __webpack_require__(11);

var _getCreditCards3 = _interopRequireDefault(_getCreditCards2);

var _getActiveVans = __webpack_require__(12);

var _getActiveVans2 = _interopRequireDefault(_getActiveVans);

var _cancelVan2 = __webpack_require__(13);

var _cancelVan3 = _interopRequireDefault(_cancelVan2);

var _twoFactorVerify = __webpack_require__(14);

var _twoFactorVerify2 = _interopRequireDefault(_twoFactorVerify);

var _checkForTwoFactor = __webpack_require__(15);

var _checkForTwoFactor2 = _interopRequireDefault(_checkForTwoFactor);

var _conformResponseToJson = __webpack_require__(16);

var _conformResponseToJson2 = _interopRequireDefault(_conformResponseToJson);

var _conformJsonToRequest = __webpack_require__(17);

var _conformJsonToRequest2 = _interopRequireDefault(_conformJsonToRequest);

var _conformListobjectToArray = __webpack_require__(18);

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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _ip = __webpack_require__(2);

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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCards;

var _bluebird = __webpack_require__(3);

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cancelVan;

var _bluebird = __webpack_require__(3);

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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIfTwoFactorNeeded;

var _ip = __webpack_require__(2);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conformResponseToJSON;

var _url = __webpack_require__(4);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conformJSONToRequest;

var _url = __webpack_require__(4);

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
/* 18 */
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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loginPrompt;

var _constants = __webpack_require__(1);

function loginPrompt(app) {
  return app.prompt([{
    type: _constants.PROMPT_TYPE.INPUT,
    message: _constants.USERNAME,
    name: _constants.USERNAME
  }, {
    type: _constants.PROMPT_TYPE.PASSWORD,
    message: _constants.PASSWORD,
    name: _constants.PASSWORD
  }]).then(function (promptResponse) {
    app.log.warn(_constants.LOGGING_IN);

    return app.van.login(promptResponse[_constants.USERNAME], promptResponse[_constants.PASSWORD]).then(function (creditCards) {
      app.log.success(_constants.LOGIN_SUCCESS);
      app.creditCards = creditCards;
      return app.displayCardSelectPrompt(app);
    });
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardSelectPrompt;

var _constants = __webpack_require__(1);

function cardSelectPrompt(app) {
  var chooseCreditCardList = {
    type: _constants.PROMPT_TYPE.LIST,
    name: _constants.LIST_ITEM_SELECTED,
    message: _constants.MENU_TITLE.WHICH_CARD_TO_GENERATE_VANS_FOR,
    choices: []
  };
  chooseCreditCardList.choices.push({
    name: app.chalk.yellow(_constants.MENU_TEXT.EXIT),
    value: null
  });
  app.creditCards.forEach(function (card, i) {
    chooseCreditCardList.choices.push({
      name: app.chalk.cyan('  ' + card.CardholderName + ' ############' + String(card.PAN)),
      value: i
    });
  });

  return app.prompt(chooseCreditCardList).then(function (promptResponse) {
    if (promptResponse[_constants.LIST_ITEM_SELECTED] === null) {
      return app.exitSelected();
    }

    app[_constants.LIST_ITEM_SELECTED] = promptResponse[_constants.LIST_ITEM_SELECTED];
    app.selectedCard = app.creditCards[app[_constants.LIST_ITEM_SELECTED]];

    return app.displayCardOptionsPrompt(app);
  });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardOptionsPrompt;

var _constants = __webpack_require__(1);

function cardOptionsPrompt(app) {
  var chooseCreditCardOptionList = {
    type: _constants.PROMPT_TYPE.LIST,
    name: _constants.LIST_ITEM_SELECTED,
    message: _constants.MENU_TITLE.SELECT_CREDIT_CARD_OPTION,
    choices: [{
      name: app.chalk.yellow(_constants.MENU_TEXT.BACK),
      value: _constants.MENU_VALUE.BACK
    }, {
      name: app.chalk.cyan(_constants.MENU_TEXT.GENERATE_VAN_WITH_NO_LIMITS),
      value: _constants.MENU_VALUE.GENERATE_VAN_WITH_NO_LIMITS
    }, {
      name: app.chalk.cyan(_constants.MENU_TEXT.GENERATE_VAN_WITH_LIMITS),
      value: _constants.MENU_VALUE.GENERATE_VAN_WITH_LIMITS
    }, new app.inquirer.Separator(app.chalk.green(_constants.MENU_TITLE.ACTIVE_VANS))]
  };

  if (!app.selectedCard.ActiveVans || !app.selectedCard.ActiveVans.length) {
    chooseCreditCardOptionList.choices.push(new app.inquirer.Separator(app.chalk.green(_constants.MENU_TITLE.NO_ACTIVE_VANS_FOUND)));
  }

  app.selectedCard.ActiveVans.forEach(function (van, i) {
    var color = app.chalk.green;
    if (van.ValidFlag !== 'Y' || van.MerchantId !== '-' || van.MerchantName !== '-') {
      color = app.chalk.yellow;
    }
    chooseCreditCardOptionList.choices.push({
      name: color('  ' + van.PAN + ' Exp: ' + van.Expiry + ' CVV: ' + van.AVV + ' Issued: ' + van.IssueDate),
      value: i
    });
  });

  return app.prompt(chooseCreditCardOptionList).then(function (promptResponse) {
    switch (promptResponse[_constants.LIST_ITEM_SELECTED]) {
      case _constants.MENU_VALUE.GENERATE_VAN_WITH_NO_LIMITS:
        return app.van.generateVanForACreditCard(app.selectedCard).then(function (results) {
          if (results.twoFactorNeeded) {
            return app.displayTwoFactorPrompt(results).then(function () {
              return app.van.generateVanForACreditCard(app.selectedCard);
            });
          }
          return results;
        }).then(function (newcard) {
          console.log(app.chalk.green('\n---new card generated--\n\n  ' + newcard.PAN + ' EXP: ' + newcard.Expiry + ' CVV: ' + newcard.AVV + ' \n\n'));
          return app.displayCardOptionsPrompt();
        });
      case _constants.MENU_VALUE.GENERATE_VAN_WITH_LIMITS:
        return app.displayGenerateVanWithLimitsPrompt();
      case _constants.MENU_VALUE.BACK:
        return app.displayCardSelectPrompt();
      default:
        app.selectedVan = app.selectedCard.ActiveVans[Number(promptResponse[_constants.LIST_ITEM_SELECTED])];
        return app.displayServiceVanPrompt();
    }
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serviceVan;

var _constants = __webpack_require__(1);

function serviceVan(app) {
  var chooseVanOption = {
    type: _constants.PROMPT_TYPE.LIST,
    name: _constants.LIST_ITEM_SELECTED,
    message: _constants.MENU_TITLE.SELECT_VAN_OPTION,
    choices: [{
      name: app.chalk.yellow(_constants.MENU_TEXT.BACK),
      value: _constants.MENU_VALUE.BACK
    }, {
      name: app.chalk.red(_constants.MENU_TEXT.CLOSE_VAN),
      value: _constants.MENU_VALUE.CLOSE
    }]
  };

  Object.keys(app.selectedVan).forEach(function (key) {
    console.log(app.chalk.cyan(key + ': ' + app.selectedVan[key]));
  });

  return app.prompt(chooseVanOption).then(function (promptResponse) {
    if (promptResponse[_constants.LIST_ITEM_SELECTED] === _constants.MENU_VALUE.CLOSE) {
      return app.van.cancelVan(app.selectedCard, app.selectedVan).then(function (results) {
        app.log.success('card ' + results.CPNPAN + ' closed successfully');
        return app.displayCardOptionsPrompt();
      });
    }
    return app.displayCardOptionsPrompt();
  });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = twoFactorPrompt;

var _constants = __webpack_require__(1);

function twoFactorVerifyCodePrompt(app, twoFactor) {
  return app.prompt([{
    type: _constants.PROMPT_TYPE.INPUT,
    message: _constants.MENU_TITLE.ENTER_CODE_RECEIVED,
    name: _constants.MENU_VALUE.CODE
  }]).then(function (userPromptResults) {
    return twoFactor.verifyCode(userPromptResults.code);
  });
}

function twoFactorPrompt(app, twoFactor) {
  var chooseVerifyMethodList = {
    type: _constants.PROMPT_TYPE.LIST,
    name: _constants.LIST_ITEM_SELECTED,
    message: _constants.MENU_TITLE.SELECT_CREDIT_CARD,
    choices: [{
      name: app.chalk.yellow(_constants.MENU_TEXT.BACK),
      value: _constants.MENU_VALUE.BACK
    }]
  };
  twoFactor.verifyMethods.forEach(function (method) {
    chooseVerifyMethodList.choices.push({
      name: '  ' + method.Text,
      value: method.Id
    });
  });

  return app.prompt(chooseVerifyMethodList).then(function (promptResponse) {
    if (promptResponse[_constants.LIST_ITEM_SELECTED] === _constants.MENU_VALUE.BACK) {
      return app.displayCardOptionsPrompt();
    }
    var method = twoFactor.verifyMethods.find(function (item) {
      return item.Id === promptResponse[_constants.LIST_ITEM_SELECTED];
    });
    return twoFactor.selectVerifyMethod(method).then(function () {
      return twoFactorVerifyCodePrompt(app, twoFactor).catch(function (e) {
        app.log.error(e);
        return twoFactorVerifyCodePrompt(app, twoFactor).catch(function (e2) {
          app.log.error(e2);
          return twoFactorVerifyCodePrompt(app, twoFactor);
        });
      });
    });
  });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateVanWithLimits;

var _constants = __webpack_require__(1);

function generateVanWithLimits(app) {
  return app.prompt([{
    type: _constants.PROMPT_TYPE.INPUT,
    message: _constants.MENU_TITLE.WHAT_IS_MAX_SPEND_LIMIT,
    name: _constants.MENU_VALUE.SPEND_LIMIT
  }, {
    type: _constants.PROMPT_TYPE.INPUT,
    message: _constants.MENU_TITLE.HOW_MANY_MONTHS_VAN_GOOD_FOR,
    name: _constants.MENU_VALUE.NUMBER_OF_MONTHS_VALUD_FOR
  }]).then(function (promptResponse) {
    return app.van.generateVanForACreditCard(app.selectedCard, promptResponse[_constants.MENU_VALUE.SPEND_LIMIT], promptResponse[_constants.MENU_VALUE.NUMBER_OF_MONTHS_VALUD_FOR]).then(function (results) {
      if (results.twoFactorNeeded) {
        return app.displayTwoFactorPrompt(results).then(function () {
          return app.van.generateVanForACreditCard(app.selectedCard, promptResponse[_constants.MENU_VALUE.SPEND_LIMIT], promptResponse[_constants.MENU_VALUE.NUMBER_OF_MONTHS_VALUD_FOR]);
        });
      }

      return results;
    }).then(function (newcard) {
      app.log.success('\n---new card generated--\n\n  ' + newcard.PAN + ' EXP: ' + newcard.Expiry + ' CVV: ' + newcard.AVV + ' \n\n');
      return app.displayCardOptionsPrompt();
    });
  });
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })
/******/ ]);
//# sourceMappingURL=cli.js.map