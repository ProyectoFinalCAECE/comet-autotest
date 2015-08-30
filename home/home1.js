/**
 *
 *
 * Verificar que llegué al home
 *
 */

module.exports = {
  'home test' : function (client) {
    client
      .url('http://localhost:4000')
      .waitForElementPresent('body', 1000);

  },
  'part two' : function(client) {
    client
      .pause(1000)
      .assert.containsText('.container', 'Bienvenido a Comet')
      .end();
  }
};
