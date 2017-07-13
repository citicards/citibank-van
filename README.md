# citibank-van

Citibank and Citicards.com virtual account number generator for node js

## Why does this exist?

The tools for creating virtual account numbers on citicards.com are outdated and require flash to use which has security vulnerabilities in most instances.  This tool was created so that virtual account numbers could be generated using an api or with a cli.

### cli install & usage

```bash
  npm install citibank-van -g
```

```bash
  citibank-van
```

### basic from node install and usage

More documentation will come later

```bash
  npm install citibank-van --save-dev
```

```node
  const CitibankVan = require('citibank-van');
  const app = new CitibankVan();
  app.login('username', 'password')
  .then(creditcards => {
    app.generateVanForACreditCard(creditcards[0])
    .then(newVanCreated => {
      console.log(newVanCreated);
    });
  });
```
