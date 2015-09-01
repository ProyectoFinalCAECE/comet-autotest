/**
 *
 * Login exitoso de usuario "test@test.com" pass "Test123"
 * Nota: De no existir, crear este usuario con estos datos exactos!!!
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

  'Llegar a Dashboard' : function(client) {
    client
      .setValue('input[name=email]', ['test@test.com', client.Keys.ENTER])
      .setValue('input[name=password]', ['Test123', client.Keys.ENTER])
      .waitForElementPresent('body', 1000)
      .assert.urlContains('dashboard')
      .end();
  }
};
