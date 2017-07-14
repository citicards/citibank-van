const axios = require('axios');

const login = require('./login.js');
const generateVanForACreditCard = require('./generate-van.js');
const getCreditCards = require('./get-credit-cards');
const getActiveVansForACreditCard = require('./get-active-vans');
const cancelVan = require('./cancel-van');
const TwoFactorVerifyClass = require('./two-factor-verify');
const checkIfTwoFactorNeeded = require('./check-for-two-factor');

const conformResponseToJSON = require('./tools/conform-response-to-json');
const conformJSONtoRequest = require('./tools/conform-json-to-request');
const conformListObjectToArray = require('./tools/conform-listobject-to-array');

class CitibankVAN {
  constructor() {
    this.baseAxios = axios.create({
      baseURL: 'https://online.citi.com',
      withCredentials: true
    });
    this.api = {
      get: (...allParams) => this.baseAxios.get(...allParams).then(this.conformResponseToJSON()),
      post: (...allParams) => this.baseAxios.post(...allParams).then(this.conformResponseToJSON()),
      put: (...allParams) => this.baseAxios.put(...allParams).then(this.conformResponseToJSON()),
      del: (...allParams) => this.baseAxios.del(...allParams).then(this.conformResponseToJSON()),
    };
    this.creditCards = [];
    this.MsgNo = 0;
    this.request = (requestObject) => this.api.post('/Athena/WebServlet', this.conformJSONtoRequest(requestObject));
  }
  conformResponseToJSON() {
    return conformResponseToJSON(this);
  }
  conformJSONtoRequest(...params) {
    return conformJSONtoRequest(this)(...params);
  }
  conformListObjectToArray(...params) {
    return conformListObjectToArray(...params);
  }
  getCookies() {
    return this.api.get('/US/VAN/webcard/ranwebcard.jsp?brand=Citi&slim=true');
  }
  getMsgNo() {
    this.MsgNo++;
    return this.MsgNo;
  }
  login(username, password) {
    this.username = username;
    this.password = password;
    return login(this);
  }
  checkIfTwoFactorNeeded() {
    return checkIfTwoFactorNeeded(this);
  }
  getCreditCards() {
    return getCreditCards(this);
  }
  generateVanForACreditCard(card) {
    return generateVanForACreditCard(this, card);
  }
  getActiveVansForACreditCard(card) {
    return getActiveVansForACreditCard(this, card);
  }
  twoFactorVerify(cyotaId, verifyMethodsArray) {
    return new TwoFactorVerifyClass(this, cyotaId, verifyMethodsArray);
  }
  cancelVan(card, van) {
    return cancelVan(this, card, van);
  }
}

module.exports = CitibankVAN;
