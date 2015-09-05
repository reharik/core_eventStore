/**
 * Created by parallels on 9/3/15.
 */

var extend = require('extend');

module.exports = function(_options) {
    var options = {
        "eventstore": {
            "host"         : "eventstore",
            "systemUsers"  : {"admin": "admin"},
            "adminPassword": "changeit"
        },
        logger      : {
            moduleName: "EventStore"
        }
    };
    extend(options, _options || {});
    var container = require('./registry')(options);
    var plugin = container.getInstanceOf('plugin');

    return plugin;
};
