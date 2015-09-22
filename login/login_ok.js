/**
 *
 * Login exitoso de usuario "test@test.com" pass "Test123"
 * Nota: De no existir, crear este usuario con estos datos exactos!!!
 *
 */

module.exports = {
  'Llegar a Login' : function(client) {
    client
      //corroboro que este en el home (no loggeado)
      .url('http://localhost:4000')
      .waitForElementPresent('[data-view="home"]', 1000)
      //espero que cargue la barra antes de hacerle click...
      .waitForElementVisible('.navbar', 1000)
      //Boton Login
      .click(".navbar li:nth-child(2) a")
      .waitForElementPresent('[data-view="login"]', 1000);
  },

  'Llegar a Dashboard' : function(client) {
    client
      .setValue('input[name=email]', ['test@test.com', client.Keys.ENTER])
      .setValue('input[name=password]', ['Test123', client.Keys.ENTER])
      .waitForElementPresent('[data-view="dashboard"]', 1000)
      .end();
  }
};
