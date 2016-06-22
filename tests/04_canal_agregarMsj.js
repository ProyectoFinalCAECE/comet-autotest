/**
 *
 * Agregar un nuevo mensaje en el primer canal del primer proyecto que se muestre en el
 * Dashboard.
 * Requiere del usuario Test, clave Test123 y un proyecto con un canal
 *
 */

module.exports = {
  tags:['integrado'],

  'Login' : function(client) {
    client
      .login();
  },

  'Seleccionar Proyecto' : function(client) {
    client
      //corroboro que estoy en la lista de proyectos del dashboard
      .waitForElementPresent('[data-view=project-list]', 5000)
      .sleep(1)

      //ingreso a cualquier proyecto
      .click('div.col-lg-4 > div > a')

      //corroboro que llegue a los canales
      .waitForElementPresent('[data-view=channel-list]', 5000)
      .sleep(1)
  },

  'Seleccionar Canal' : function(client) {
    client
      //entro al primer canal que aparezca
      .click("tr.ng-scope")

      .waitForElementPresent('[data-view=channel-explore]', 5000)
      .sleep(1)
  },

  'Agregar Mensaje' : function(client) {
    client
      .setValue('[name=message]','Mensaje ingresado por NightWatch!')
      .sleep(1)
      .setValue('[name=message]',[client.Keys.ENTER])
      .sleep(1)

      //verifico que el mensaje se agregue
      // XPath: "(//*[@class='message'])[last()]"
      .getText('.chat-message:last-child .message-content', function(result) {
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'Mensaje ingresado por NightWatch!');
      })
  },

  'Confirmar Mensaje Nuevo' : function(client) {
    client
      .refresh()
      .waitForElementPresent('[data-view=channel-explore]', 5000)

      //verifico que el mensaje haya persistido
      .getText('.chat-message:last-child .message-content', function(result) {
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'Mensaje ingresado por NightWatch!');
      })
      .sleep(1)
      .end();
  }
};
