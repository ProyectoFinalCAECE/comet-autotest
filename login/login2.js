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
      .click(".navbar-nav li:nth-child(3) a") //Boton Login
      .waitForElementPresent('body', 1000)
      .assert.urlContains('user/login');
  },

  'Ingreso usuario' : function(client) {
    client
      .pause(200) //quitar estas pausas, son para hacer mas visible el test
      .setValue('input[name=email]', ['test@test.com', client.Keys.ENTER])
      .pause(200)
      .setValue('input[name=password]', ['Test123', client.Keys.ENTER])
      .pause(200)
      .waitForElementPresent('.navbar', 1000)
      .assert.containsText(".navbar-nav li:nth-child(1) a","autotest")
      .end();
  }
};
