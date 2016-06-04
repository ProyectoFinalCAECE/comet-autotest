/**
 *  Creacion de usuario Pedro Gomez pedrogomez@gmail.com
 *  pasando por todas las validaciones del formulario
 *
 *  Precondidicon: No tener el usuario pedrogomez@gmail.com en la base
 *  Ejecutar con: nightwatch -e chrome -t /comet-autotest/tests/tests_completos/usuario_crear.js
 */

module.exports = {

  'Crear usuario sin nombre' : function(client) {
    client
      //ingreso al home de Comet
      .windowMaximize()
      .url('https://localhost:4000')
      .waitForElementPresent('[data-view="home"]', 2000)

      //presiono "Crear Cuenta"
      .click('#navbar > ul > li:nth-child(6) > a')

      //corroboro que llegue a la creacion de usuario
      .waitForElementPresent('[data-view=user_create]', 2000)

      //completo datos del usuario sin nombre
      //.setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test12')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },

  'Crear usuario sin apellido' : function(client) {
    client
      .refresh()
      //completo datos del usuario sin apellido
      .setValue('[name=firstName]', 'Pedro')
      //.setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test12')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },

  'Crear usuario sin mail' : function(client) {
    client
      .refresh()
      //completo datos del usuario sin mail
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      //.setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test12')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },
  'Crear usuario con mail inválido' : function(client) {
    client
      .refresh()
      //completo datos del usuario con mail erroneo
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomezgmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test12')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },
  'Crear usuario con contraseñas distintas' : function(client) {
    client
      .refresh()
      //completo datos del usuario con pass distintos
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test11')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },
  'Crear usuario con password < 6' : function(client) {
    client
      .refresh()
      //completo datos del usuario con pass < 6
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test1')
      .setValue('[name=confirmPassword]', 'Test1')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },
  'Crear usuario con password > 40' : function(client) {
    client
      .refresh()
      //completo datos del usuario con pass > 40
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test5678901234567890123456789012345678901')
      .setValue('[name=confirmPassword]', 'Test5678901234567890123456789012345678901')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },
  'Crear usuario con password vacío' : function(client) {
    client
      .refresh()
      //completo datos del usuario sin password
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', '')
      .setValue('[name=confirmPassword]', '')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
  },
  'Crear usuario correctamente' : function(client) {
    client
      .refresh()
      //completo datos del usuario
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test12')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //llegue al dashboard
      .waitForElementPresent('[data-view="dashboard"]', 2000)

      //Hago logout para continuar las pruebas
      .click('.ng-toast__message')
      .click('#page-wrapper > div:nth-child(1) > div > nav > ul > li:nth-child(2) > a')
  },
  'Crear usuario existente' : function(client) {
    client
      .waitForElementPresent('[data-view="home"]', 2000)

      //presiono "Crear Cuenta"
      .click('#navbar > ul > li:nth-child(6) > a')

      //corroboro que llegue a la creacion de usuario
      .waitForElementPresent('[data-view=user_create]', 2000)

      //completo datos del usuario
      .setValue('[name=firstName]', 'Pedro')
      .setValue('[name=lastName]', 'Gomez')
      .setValue('[name=email]', 'pedrogomez@gmail.com')
      .setValue('[name=password]', 'Test12')
      .setValue('[name=confirmPassword]', 'Test12')

      //intento crear el usuario
      .setValue('[type=submit]',[client.Keys.ENTER])

      //Alguno de los input me devuelve error
      .waitForElementPresent('#formulario > div > form > div.form-group.has-error > div', 2000)
      .end()
  }
};
