function getCards(app) {
  return app.api.post('/Athena/WebServlet', app.conformJSONtoRequest({
    Password: app.password,
    Request: 'GetActiveCards',
    SessionId: app.sessionId,
    User: app.username,
    IssuerId: '1',
    WebcardType: 'SLIM',
    Locale: 'en'
  }))
    .then(results => {
      app.usersNumberOfCreditCards = Number(results.Total);
      for (let i = 1; i <= app.usersNumberOfCreditCards; i++) {
        app.creditCards.push({
          cardholdersName: results[`CardholderName${i}`],
          lastFourOfCardNumber: results[`PAN${i}`],
          cardNickName: results[`Nickname${i}`],
          defaultCard: results[`DefaultCard${i}`] === 'Y',
          VCardId: results[`VCardId${i}`],
          CardType: results[`CardType${i}`]
        });
      }
      return app.creditCards;
    });
}

module.exports = getCards;
