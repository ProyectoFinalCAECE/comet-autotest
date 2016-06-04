/**
 *
 * Creacion del usuario test@test.com ("Test User")
 * El test falla si el usuario ya existe!
 *
 */

module.exports = {
  tags:['nada'],

  'Crear Usuario' : function(client) {
    client
      //ingreso al home de Comet
      .windowMaximize()
      .url('https://localhost:4000')
      .waitForElementPresent('[data-view="home"]', 1000)
      .sleep(2)

      //presiono "Crear Cuenta"
      .click('#navbar > ul > li:nth-child(6) > a')

      //corroboro que llegue a la creacion de usuario
      .waitForElementPresent('[data-view=user_create]', 1000)

      //completo datos del usuario Test
      .setValue('[name=firstName]', 'Test')
      .sleep(1)
      .setValue('[name=lastName]', 'User')
      .sleep(1)
      .setValue('[name=email]', 'test@test.com')
      .sleep(1)
      .setValue('[name=password]', 'Test123')
      .sleep(1)
      .setValue('[name=confirmPassword]', 'Test123')
      .sleep(1)

      //creo el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])
      .sleep(1)

      .waitForElementPresent('[data-view=project-list]', 1000)
      .sleep(2)

      .end();
  }
};
