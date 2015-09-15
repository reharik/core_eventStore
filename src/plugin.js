/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(appendToStreamPromise, readStreamEventsForwardPromise, gesConnection, gesClient, extend ) {
    //return function plugin(_options) {
    //    var options = extend({}, _options || {});

    return {
        appendToStreamPromise         : appendToStreamPromise,
        readStreamEventsForwardPromise: readStreamEventsForwardPromise,
        subscribeToAllFrom            : gesConnection.subscribeToAllFrom,
        gesClientHelpers              : {
            setStreamMetadata   : gesClient.setStreamMetadata,
            createStreamMetadata: gesclient.createStreamMetadata,
            systemRoles         : gesclient.systemRoles,
            systemUsers         : gesclient.systemUsers
        }
    };
    //}
};
