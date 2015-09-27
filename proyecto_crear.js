/**
 *
 * Creacion de un nuevo proyecto
 * Requiere del usuario Test, clave Test123
 *
 */

//Genero un nombre de proyecto unico
var nombreProyecto = 'TestProject_' + new Date().toISOString();

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
      //ingreso datos de login
      .setValue('input[name=email]', ['test@test.com'])
      .setValue('input[name=password]', ['Test123'])

      //presiono "Ingresar"
      .setValue('[type=submit]',[client.Keys.ENTER])
      .waitForElementPresent('[data-view="dashboard"]', 1000)
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

      //corroboro que aparezca el de proyecto creado y lo acepto
      .waitForElementPresent('[ng-click="vm.ok()"]', 1000)
      .setValue('[ng-click="vm.ok()"]',[client.Keys.ENTER])

      //por ultimo confirmo que vuelva a la lista de proyectos
      .waitForElementPresent('[data-view=project-list]', 1000)

      .end();
  }
};
