/**
 * Created by parallels on 9/3/15.
 */
"use strict";

var extend = require('extend');

module.exports = function(_options) {
    var options = {};
    //    "eventstore": {
    //        "host"         : "eventstore",
    //        "systemUsers"  : {"admin": "admin"},
    //        "adminPassword": "changeit"
    //    },
    //    logger      : {
    //        moduleName: "EventStore"
    //    }
    //};
    options = extend(options, _options || {});
    return  require('./registry')(options);
    //var plugin = container.getInstanceOf('plugin');
    //
    //return plugin;
};
