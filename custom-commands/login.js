exports.command = function(username, password, callback) {
    var self = this;
    this
        .frame(null)
        .waitForElementPresent('input[name=username]', 1000)
        .setValue('input[name=title]', username)
        .waitForElementPresent('input[name=password]', 1000)
        .setValue('input[name=password]', password)
        .click('button.submit');

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};
