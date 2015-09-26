module.exports = {
    "Log in, click around." : function (browser) {
        browser
            .url("http://localhost:4000")
            .login('USERNAME', 'PASSWORD')
            //At this point I've already logged in, with one command.
            .assert.containsText('#main', 'Welcome!')
            .end();
     }
};
