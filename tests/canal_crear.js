/**
 *
 * Creacion de un nuevo canal, en el primer proyecto que se muestre en el
 * Dashboard.
 * Requiere del usuario Test, clave Test123
 *
 */

//Genero un nombre de proyecto unico
var nombreCanal = 'TestChannel_' + new Date().toISOString();

module.exports = {
  'Login' : function(client) {
    client
      .login();
  },

  'Seleccionar Proyecto' : function(client) {
    client
      //corroboro que estoy en la lista de proyectos del dashboard
      .waitForElementPresent('[data-view=project-list]', 1000)

      .sleep(2)

      //ingreso a cualquier proyecto
      .click('div.col-lg-4 > div > a')

      //corroboro que llegue a los canales
      .waitForElementPresent('[data-view=channel-list]', 1000)
      .sleep(2)
  },

  'Crear Canal' : function(client) {
      client

        /*
          como hay dos botones para crear canal, segun si ya existen canales
          chequeo cual aparece antes de cliquearlo (el orden importa)
        */

        .ifElementPresent('a.btn[name=btnCrearCanal]', 500, false,
          function(found) { if(found) client.click('a.btn[name=btnCrearCanal]') })

        .ifElementPresent('button.btn:nth-child(1)[name=btnCrearCanal]', 500, false,
          function(found) { if(found) client.click('button.btn:nth-child(1)[name=btnCrearCanal]') })

        //corroboro que llegue a la creacion de canal
        .waitForElementPresent('[data-view=channel-create]', 1000)
        .sleep(1)

        //completo datos del canal
        .setValue('[name=name]', [nombreCanal])
        .sleep(1)
        .setValue('textarea',['Canal creado automáticamete por nightwatch'])
        .sleep(1)

        //creo el canal
        .setValue('[type=submit]',[client.Keys.ENTER])
        .sleep(1)

        //corroboro que aparezca el mensaje de canal creado y lo acepto
        .waitForElementPresent('[ng-click="vm.ok()"]', 1000)
        .setValue('[ng-click="vm.ok()"]',[client.Keys.ENTER])

        //por ultimo confirmo que estoy dentro del nuevo canal
        .waitForElementPresent('[data-view=channel-explore]', 1000)
        .sleep(2)

        .end();
  }
};
