
"use strict";

module.exports = function(gesclient, logger, extend) {
    return function(_options) {
        var options = extend({}, _options, {});
        var connection;
        logger.trace('accessing gesConnection');
        if (!connection) {
            logger.debug('creatextending gesConnection');
            logger.trace('IP:' + options.host + ':1113');
            connection = gesclient({
                host: options.host,
                port: 1113
            })
        }
        logger.debug('gesConnection: ' + connection);
        return connection;
    };
};
