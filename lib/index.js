import axios from 'axios';

import login from './login.js';
import generateVanForACreditCard from './generate-van.js';
import getCreditCards from './get-credit-cards';
import getActiveVansForACreditCard from './get-active-vans';
import cancelVan from './cancel-van';
import TwoFactorVerifyClass from './two-factor-verify';
import checkIfTwoFactorNeeded from './check-for-two-factor';

import conformResponseToJSON from './tools/conform-response-to-json';
import conformJSONtoRequest from './tools/conform-json-to-request';
import conformListObjectToArray from './tools/conform-listobject-to-array';

import {
  URLS,
} from './.constants';

export default class CitibankVAN {
  constructor() {
    this.baseAxios = axios.create({
      baseURL: URLS.BASE_URL,
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
    this.request = (requestObject) => this.api.post(URLS.APPLET_SUB_URL, this.conformJSONtoRequest(requestObject));
  }
  conformResponseToJSON() {
    return conformResponseToJSON(this);
  }
  conformJSONtoRequest(jsonObject) {
    return conformJSONtoRequest(this)(jsonObject);
  }
  conformListObjectToArray(jsonObject) {
    return conformListObjectToArray(jsonObject);
  }
  getCookies() {
    return this.api.get(URLS.COOKIES_SUB_URL);
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
  generateVanForACreditCard(card, spendLimit, NumberOfMonthsValidFor) {
    return generateVanForACreditCard(this, card, spendLimit, NumberOfMonthsValidFor);
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
