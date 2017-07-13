#! /usr/bin/env node
const chalk = require('chalk');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const CitibankVAN = require('../index.js');
const loginPrompt = require('./login');
const cardSelectPrompt = require('./card-select');
const cardOptionsPrompt = require('./card-options');

class App {
  constructor() {
    this.van = new CitibankVAN();
    this.chalk = chalk;
    this.prompt = prompt;
  }
  handleError(functionName) {
    return (error) => console.error(chalk.red(`An Error Occured in ${functionName}`), error);
  }
  init() {
    return this.displayLoginPrompt().catch(this.handleError('Unknown'));
  }
  displayLoginPrompt() {
    return loginPrompt(this).catch(this.handleError('loginPrompt'));
  }
  displayCardSelectPrompt() {
    return cardSelectPrompt(this).catch(this.handleError('cardSelectPrompt'));
  }
  displayCardOptionsPrompt() {
    return cardOptionsPrompt(this).catch(this.handleError('cardOptionsPrompt'));
  }
  exitSelected() {
    console.log(chalk.green('Goodbye'));
  }
}

const app = new App();

console.log('\n', chalk.bgRed('Disclaimer: This product is not associated with Citibank in any way whatsoever and they should not be contacted for help with this app.  Please locate this app on github and open an issue on the issues page. This is app is distributed under the MIT license and is provided without warrenty and does guarantee any security or lack there of.  Use it at your own risk.'), '\n');

console.log(chalk.cyan('=== Citicards.com Virtual Account Number Login ==='));
app.init();
