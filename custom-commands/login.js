exports.command = function(callback) {
    var self = this;
    this
      .windowMaximize()
      .url('https://localhost:4000')
      .waitForElementPresent('[data-view="home"]', 1000)

      //espero que cargue la barra antes de hacerle click...
      .waitForElementVisible('.navbar', 1000)

      //Boton Login
      .sleep(2)
      .click('#navbar > ul > li:nth-child(7) > a')
      .waitForElementPresent('[data-view="login"]', 1000)

      //Ingreso datos de usuario Test
      .sleep(1)
      .setValue('input[name=email]', ['test@test.com'])
      .sleep(1)
      .setValue('input[name=password]', ['Test123'])

      //presiono "Ingresar"
      .sleep(1)
      .click("[type=submit]")
      .waitForElementPresent('[data-view="dashboard"]', 5000)

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};
