/**
 *
 * Verificar link al login
 *
 */

module.exports = {
  'login' : function(client) {
    client
      .url('http://localhost:4000')
      .click("[href*=login]")
      .assert.containsText('body', 'Bienvenido a Comet')
      .pause(5000)
      .end();
  }
};
