[![NPM](https://nodei.co/npm/citibank-van.png)](https://npmjs.org/package/citibank-van)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![codebeat badge](https://codebeat.co/badges/39218377-64b3-4293-b3b9-90013fead066)](https://codebeat.co/projects/github-com-thomasmeadows-citibank-van-master)

[![Build Status](https://semaphoreci.com/api/v1/thomasmeadows/citibank-van/branches/master/badge.svg)](https://semaphoreci.com/thomasmeadows/citibank-van)

![Citibank Virtual Account Numbers CLI](https://raw.githubusercontent.com/thomasmeadows/citibank-van/master/cli.gif)

# Citibank Virtual Account Number Generator and Servicer

Citibank and Citicards.com virtual account number generator for node js.  This tool was created so that virtual account numbers could be generated using an api or with the cli.  This is an unofficial tool not created by citibank and they should not be contacted for any issues regarding the tool.

## Why does this exist?

The tools for creating virtual account numbers on citibank are outdated and requires flash. Almost every version of flash has severe security vulnerabilities and isn't even supported by Mozilla.  With this package you can generate virtual account numbers without having flash installed or even opening a browser.

### Whats a virtual account number?

Virtual Account Numbers(VAN) are an amazing tool created by citibank where you can generate temporary credit cards and then give them to merchants(usually ones you don't trust ex. new Internet store you found or an As Seen On TV vendor).  Once you use the card you can immediately cancel it so the vendor no longer has access to your credit card.

### cli install & usage

Install it

```bash
npm install citibank-van -g
```

Then run it

```bash
citibank-van
```

### basic from node install and usage

More documentation will come later.

```bash
npm install citibank-van --save-dev
```

```node
const CitibankVan = require('citibank-van');
const app = new CitibankVan();

app.login('username', 'password')
.then(creditCards => {
  console.log(creditCards); // contains all users credit cards and vans attached
  return app.checkIfTwoFactorNeeded()
  .then(twoFactor) {
    // sometimes two factor is needed to generate virtual account numbers
    if(!twoFactor.twoFactorNeeded) {
      return app.generateVanForACreditCard(creditCards[0])
      .then(newVanCreated => {
        console.log(newVanCreated);
      });
    }
    // process two factor(needs to be presented to user, see cli app for example, sudo example below)
    console.log(twoFactor.verifyMethods);
    return twoFactor.selectVerifyMethod(verifyMethods[0])
    .then(() => {
      twoFactor.verifyCode(someCodeVariableGivenByUser)
      .then(() => {
        return app.generateVanForACreditCard(creditCards[0])
        .then(newVanCreated => {
          console.log(newVanCreated);
        });
      });
    });
    // end sudo example
  }
});
```
