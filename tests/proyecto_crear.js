/**
 *
 * Creacion de un nuevo proyecto
 * Requiere del usuario Test, clave Test123
 *
 */

//Genero un nombre de proyecto unico
var nombreProyecto = 'TestProject_' + new Date().toISOString();

module.exports = {
  'Login' : function(client) {
    client
      .login();
  },

  'Crear Proyecto' : function(client) {
    client
      //corroboro que estoy en la lista de proyectos del dashboard
      .waitForElementPresent('[data-view=project-list]', 1000)

      //presiono "Crear Proyecto"
      .setValue('[name=btnCrearProyecto]', [client.Keys.ENTER])

      //corroboro que llegue a la creacion de proyecto
      .waitForElementPresent('[data-view=project-create]', 1000)

      //completo datos del proyecto
      .setValue('[name=name]', [nombreProyecto])
      .setValue('textarea',['Proyecto creado automáticamete por nightwatch'])

      //creo el proyecto
      .setValue('[type=submit]',[client.Keys.ENTER])

      //corroboro que aparezca el mensaje de proyecto creado y lo acepto
      .waitForElementPresent('[ng-click="vm.ok()"]', 1000)
      .setValue('[ng-click="vm.ok()"]',[client.Keys.ENTER])

      //por ultimo confirmo que vuelva a la lista de proyectos
      .waitForElementPresent('[data-view=project-list]', 1000)

      .end();
  }
};
