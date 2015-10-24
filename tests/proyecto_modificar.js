/**
 *
 * Creacion de un nuevo proyecto
 * Requiere del usuario Test, clave Test123
 *
 */

module.exports = {
  'Login' : function(client) {
    client
      .login();
  },

  'Explorar Proyecto' : function(client) {
    client
      //corroboro que estoy en la lista de proyectos del dashboard
      .waitForElementPresent('[data-view=project-list]', 1000)
      .sleep(1)

      //ingreso a cualquier proyecto para modificar
      .click('[ui-sref*="dashboard.project-explore"]')
      //corroboro que llegue estoy dentro del proyecto
      .waitForElementPresent('[data-view=channel-list]', 1000)
      .sleep(1)
  },

  'Administrar Proyecto' : function(client) {
    client
      //ingreso a administrar proyecto
      .click('[name=btnAdmProyecto]')
      .sleep(1)
  },

  // ojo, en este paso se alargan el nombre y la descripcion, por lo que
  // en algun momento va a superar el tamaño maximo... no es la idea
  'Actualizar Datos' : function(client) {
    client
      //corroboro que estoy en la modificacion de proyecto
      .waitForElementPresent('[data-view="project-admin"]',1000)
      .sleep(1)

      //modifico el nombre
      .getText('[name=firstName]', function(result) {
        client
          .clearValue('[name=firstName]')
          .setValue('[name=firstName]',nombre)
      })
      .sleep(1)

      //modifico la descripcion
      .getText('textarea', function(result) {
        client
          .clearValue('textarea')
          .setValue('textarea',result.value+'\nTexto agregado por NW')
      })
      .sleep(1)

      //guardo el proyecto modificado
      .click('.col-sm-offset-2 > button:nth-child(1)')
      .sleep(1)

      //corroboro que aparezca el mensaje de canal creado y lo acepto
      .waitForElementPresent('[ng-click="vm.ok()"]', 1000)
      .setValue('[ng-click="vm.ok()"]',[client.Keys.ENTER])

      //por ultimo confirmo que volvi a la lista de proyectos
      .waitForElementPresent('[data-view=project-list]', 1000)
      .sleep(2)

      .end();
  }
};
