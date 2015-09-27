exports.command = function(callback) {
    var self = this;
    this
      .url('http://localhost:4000')
      .waitForElementPresent('[data-view="home"]', 1000)

      //espero que cargue la barra antes de hacerle click...
      .waitForElementVisible('.navbar', 1000)

      //Boton Login
      .click(".navbar li:nth-child(2) a")
      .waitForElementPresent('[data-view="login"]', 1000)
      .setValue('input[name=email]', ['test@test.com'])
      .setValue('input[name=password]', ['Test123'])

      //presiono "Ingresar"
      .click("[type=submit]")
      .waitForElementPresent('[data-view="dashboard"]', 1000)

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};
