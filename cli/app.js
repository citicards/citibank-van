const chalk = require('chalk');
const inquirer = require('inquirer');

const CitibankVAN = require('../index.js');
const loginPrompt = require('./login');
const cardSelectPrompt = require('./card-select');
const cardOptionsPrompt = require('./card-options');
const serviceVanPrompt = require('./service-van');
const twoFactorPrompt = require('./two-factor');
const generateVanWithLimitsPrompt = require('./generate-van-with-limits');

const {
  DISCLAIMER,
  MENU_TITLE,
  GOODBYE
} = require('./.constants');

class App {
  constructor() {
    this.van = new CitibankVAN();
    this.chalk = chalk;
    this.inquirer = inquirer;
    this.prompt = inquirer.createPromptModule();
    this.log = {
      warn: (...params) => this.logColor('yellow', ...params),
      warning: (...params) => this.logColor('yellow', ...params),
      error: (...params) => this.logColor('red', ...params),
      info: (...params) => this.logColor('cyan', ...params),
      success: (...params) => this.logColor('green', ...params),
    };
  }
  logColor(color, ...params) {
    const colorizedParams = [];
    params.forEach(param => {
      if (typeof param !== 'object') {
        colorizedParams.push(chalk[color](param));
      } else {
        colorizedParams.push(param);
      }
    });
    console.log(...colorizedParams);
  }
  handleError(functionName) {
    return (error) => this.log.error(`An Error Occured on ${functionName}\n`, error);
  }
  init() {
    console.log('\n', chalk.bgRed(DISCLAIMER), '\n');
    this.log.info(MENU_TITLE.PRIMARY_HEADER);
    return this.displayLoginPrompt().catch(this.handleError('Unknown'));
  }
  displayServiceVanPrompt() {
    return serviceVanPrompt(this).catch(this.handleError('editVanPrompt'));
  }
  displayLoginPrompt() {
    return loginPrompt(this).catch(this.handleError('loginPrompt'));
  }
  displayCardSelectPrompt() {
    return cardSelectPrompt(this).catch(this.handleError('cardSelectPrompt'));
  }
  displayTwoFactorPrompt(twoFactorObject) {
    return twoFactorPrompt(this, twoFactorObject).catch(this.handleError('cardSelectPrompt'));
  }
  displayCardOptionsPrompt() {
    return cardOptionsPrompt(this).catch(this.handleError('cardOptionsPrompt'));
  }
  displayGenerateVanWithLimitsPrompt() {
    return generateVanWithLimitsPrompt(this);
  }
  exitSelected() {
    this.log.success(GOODBYE);
  }
}

module.exports = App;
