require('babel-register');
const App = require('../../cli/app.js');
const app = new App();

app.creditCards = [
  {
    CardholderName: 'James Brown',
    PAN: '3334',
    ActiveVans: [
      {
        ValidFlag: 'Y',
        MerchantId: '-',
        MerchantName: '-',
        PAN: '5467245764282457671',
        Expiry: '7/30',
        CVV: '457',
        AVV: '134',
        IssueDate: '10/30/99'
      }
    ]
  }
];

app.selectedCard = app.creditCards[0];
app.selectedVan = app.creditCards[0].ActiveVans[0];

if(process.argv.includes('displayCardSelectPrompt')) {
  app.displayCardSelectPrompt();
}

if(process.argv.includes('displayCardOptionsPrompt')) {
  app.displayCardOptionsPrompt();
}

if(process.argv.includes('displayServiceVanPrompt')) {
  app.displayServiceVanPrompt();
}

if(process.argv.includes('displayServiceVanPrompt')) {
  app.displayServiceVanPrompt();
}

if(process.argv.includes('displayGenerateVanWithLimitsPrompt')) {
  app.displayGenerateVanWithLimitsPrompt();
}
