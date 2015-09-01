/**
 *
 * Login fallido de usuario "test@test.com" por password incorrecto
 * Nota: De no existir, crear este usuario antes, password distinto a Fail123
 *
 */

module.exports = {
  'Llegar a Login' : function(client) {
    client
      .url('http://localhost:4000')
      .waitForElementPresent('.navbar', 1000)
      .click(".navbar-nav li:nth-child(3) a") //Boton Login
      .assert.urlContains('account/login');
  },

  'Cargar datos incorrectos' : function(client) {
    client
      .setValue('input[name=email]', ['test@test.com', client.Keys.ENTER])
      .setValue('input[name=password]', ['Fail123', client.Keys.ENTER])
      .waitForElementPresent('body', 1000)
      .assert.containsText('body','Contraseña incorrecta')
      .end();
  }
};
