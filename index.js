const axios = require('axios');
const login = require('./lib/login.js');
const generateVanForACreditCard = require('./lib/generate-van.js');
const getCreditCards = require('./lib/get-credit-cards');
const conformResponseToJSON = require('./tools/conform-response-to-json');
const conformJSONtoRequest = require('./tools/conform-json-to-request');

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
  }
  conformResponseToJSON() {
    return conformResponseToJSON(this);
  }
  conformJSONtoRequest(...params) {
    return conformJSONtoRequest(this)(...params);
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
  getCreditCards() {
    return getCreditCards(this);
  }
  generateVanForACreditCard(card) {
    return generateVanForACreditCard(this, card);
  }
}

module.exports = CitibankVAN;
