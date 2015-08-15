
var gesclient = require('ges-client');
var extend = require('extend');

module.exports = function(logger, _options) {
    var options = {
        eventstore: {host: 'eventstore'}
    };
    extend(options, _options, {});
    var connection;
    logger.trace('accessing gesConnection');
    if (!connection) {
        logger.debug('creating gesConnection');
        logger.trace('IP:' + options.eventstore.host + ':1113');
        connection = gesclient({host: options.eventstore.host, port: 1113})
    }
    logger.debug('gesConnection: ' + connection);
    return connection;
};
