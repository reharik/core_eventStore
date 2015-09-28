/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(appendToStreamPromise, readStreamEventsForwardPromise, gesConnection, gesclient, extend ) {
    //return function plugin(_options) {
    //    var options = extend({}, _options || {});
    return {
        appendToStreamPromise         : appendToStreamPromise,
        readStreamEventsForwardPromise: readStreamEventsForwardPromise,
        subscribeToAllFrom            : gesConnection.subscribeToStream.bind(gesConnection),
        gesClientHelpers              : {
            setStreamMetadata   : gesConnection.setStreamMetadata.bind(gesConnection),
            createStreamMetadata: gesclient.createStreamMetadata,
            systemRoles         : gesclient.systemRoles,
            systemUsers         : gesclient.systemUsers
        },
        //this is for debug purposes only please remove
        gesConnection:gesConnection
    };
    //}
};
