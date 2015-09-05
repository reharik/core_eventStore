/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(appendToStreamPromise, readStreamEventsForwardPromise, gesConnection, extend ) {
    //return function plugin(_options) {
    //    var options = extend({}, _options || {});

    return {
        appendToStreamPromise         : appendToStreamPromise,
        readStreamEventsForwardPromise: readStreamEventsForwardPromise,
        subscribeToAll                : gesConnection.subscribeToAll,
        gesConnection                 : gesConnection
    };
    //}
};
