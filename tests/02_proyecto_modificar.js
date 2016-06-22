/**
 *
 * Modificacion de un proyecto existente
 * Requiere del usuario Test, clave Test123, y de algun proyecto ya creado
 *
 */

var hora = 'TestProject_' + new Date().toISOString();

module.exports = {
  tags:['integrado'],
  
  'Login' : function(client) {
    client
      .login();
  },

  'Explorar Proyecto' : function(client) {
    client
      //corroboro que estoy en la lista de proyectos del dashboard
      .waitForElementPresent('[data-view=project-list]', 5000)
      .sleep(1)

      //ingreso a cualquier proyecto para modificar
      .click('div.col-lg-4 > div > a')

      //corroboro que llegue estoy dentro del proyecto
      .waitForElementPresent('[data-view=channel-list]', 5000)
      .sleep(1)
  },

  'Administrar Proyecto' : function(client) {
    client
      //ingreso a administrar proyecto
      .click('[name=btnAdmProyecto]')
      .sleep(1)
  },

  'Actualizar Datos' : function(client) {
    client
      //corroboro que estoy en la modificacion de proyecto
      .waitForElementPresent('[data-view="project-admin"]',1000)
      .sleep(1)

      //modifico el nombre
      .clearValue('[name=firstName]')
      .setValue('[name=firstName]','ProyectoModificadoPorNW')
      .sleep(1)

      //modifico la descripcion
      .clearValue('textarea')
      .setValue('textarea','Texto modificado por NW')

      .sleep(1)

      //guardo el proyecto modificado
      .click('.col-sm-offset-2 > button:nth-child(1)')
      .sleep(1)

      //corroboro que aparezca el mensaje de canal creado y lo acepto
      .waitForElementPresent('[ng-click="vm.ok()"]', 5000)
      .setValue('[ng-click="vm.ok()"]',[client.Keys.ENTER])

      //por ultimo confirmo que volvi a la lista de proyectos
      .waitForElementPresent('[data-view=project-list]', 5000)
      .sleep(2)

      .end();
  }
};
