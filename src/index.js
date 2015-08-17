/**
 * Created by reharik on 8/13/15.
 */


var extend = require('extend');
var _appendToStreamPromise = require('./appendToStreamPromise');
var _readStreamEventsForwardPromise = require('./readStreamEventsForwardPromise');
var _gesConnection = require('./gesConnection');
var yowlWrapper = require('yowlWrapper');

module.exports = function index(_options) {

    var options = {
        "eventstore": {
            "host": "eventstore",
            "systemUsers": {"admin": "admin"},
            "adminPassword": "changeit"
        },
        logger: {
            moduleName: "EventStore"
        }
    };
    extend(options, _options || {});

    //lame?
    var gesclient = options.unitTest
    ? require('/gesClientMock')
    : require('ges-client');

    var logger = yowlWrapper(options.logger);
    var gesConnection = _gesConnection(gesclient, logger, options.eventstore);
    var appendToStreamPromise = _appendToStreamPromise(gesConnection,logger);
    var readStreamEventsForwardPromise = _readStreamEventsForwardPromise(gesConnection, logger);
    return {
        appendToStreamPromise:appendToStreamPromise,
        readStreamEventsForwardPromise:readStreamEventsForwardPromise,
        subscribeToAll:gesConnection.subscribeToAll
    }
};