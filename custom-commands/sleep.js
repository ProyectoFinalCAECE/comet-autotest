exports.command = function(time, callback) {
    //factor de tiempo de espera
    var delay = 1000;

    var self = this;
    this
      .pause(time * delay)
    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};
