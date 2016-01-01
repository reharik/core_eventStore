/**
 * Created by reharik on 8/13/15.
 */
"use strict";

module.exports = function(appendToStreamPromise, readStreamEventsForwardPromise, gesConnection, gesclient, extend ) {
    return function eventstore(_options) {
        var options = extend({}, _options || {});
        var ges = gesConnection(options);
        return {
            appendToStreamPromise         : appendToStreamPromise,
            readStreamEventsForwardPromise: readStreamEventsForwardPromise,
            subscribeToAllFrom            : ges.subscribeToAllFrom.bind(ges),
            gesClientHelpers              : {
                getStreamMetadata   : ges.getStreamMetadata.bind(ges),
                setStreamMetadata   : ges.setStreamMetadata.bind(ges),
                createStreamMetadata: gesclient.createStreamMetadata,
                systemRoles         : gesclient.systemRoles,
                systemUsers         : gesclient.systemUsers
            },
            //this is for debug purposes only please remove
            gesConnection                 : ges
        };
    }
};
