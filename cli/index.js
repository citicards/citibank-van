#! /usr/bin/env node
const chalk = require('chalk');
const inquirer = require('inquirer');

const CitibankVAN = require('../index.js');
const loginPrompt = require('./login');
const cardSelectPrompt = require('./card-select');
const cardOptionsPrompt = require('./card-options');
const serviceVanPrompt = require('./service-van');
const twoFactorPrompt = require('./two-factor');
const generateVanWithLimitsPrompt = require('./generate-van-with-limits');

class App {
  constructor() {
    this.van = new CitibankVAN();
    this.chalk = chalk;
    this.inquirer = inquirer;
    this.prompt = inquirer.createPromptModule();
  }
  handleError(functionName) {
    return (error) => console.error(chalk.red(`An Error Occured on ${functionName}\n`), error);
  }
  init() {
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
    console.log(chalk.green('Goodbye'));
  }
}

const app = new App();

console.log('\n', chalk.bgRed('Disclaimer: This product is not associated with Citibank in any way whatsoever and they should not be contacted for help with this app.  Please locate this app on github and open an issue on the issues page. This is app is distributed under the MIT license and is provided without warrenty and does guarantee any security or lack there of.  Use it at your own risk.'), '\n');

console.log(chalk.cyan('=== Citicards.com Virtual Account Number Login ==='));
app.init();
