/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(appendToStreamPromise, readStreamEventsForwardPromise, gesConnection, gesclient, extend ) {
    //return function plugin(_options) {
    //    var options = extend({}, _options || {});
console.log(gesConnection);
    return {
        appendToStreamPromise         : appendToStreamPromise,
        readStreamEventsForwardPromise: readStreamEventsForwardPromise,
        subscribeToAllFrom            : gesConnection.subscribeToAllFrom,
        gesClientHelpers              : {
            setStreamMetadata   : gesConnection.setStreamMetadata,
            createStreamMetadata: gesclient.createStreamMetadata,
            systemRoles         : gesclient.systemRoles,
            systemUsers         : gesclient.systemUsers
        }
    };
    //}
};
