/**
 * Created by reharik on 6/10/15.
 */

'use strict';

var uuid = require('uuid');
var SubscriptionMock = require('./SubscriptionMock');

module.exports = function gesClientMock(opts) {
    var subscription;
    var _appendToStreamShouldFail;
    var _readStreamEventForwardShouldFail;
    var readStreamEventForwardResult;
    var val = opts.val;
    var id = uuid.v1();
    var clean = function clean() {
        console.log('cleaning gesClient');
        subscription = null;
        _appendToStreamShouldFail = false;
        _readStreamEventForwardShouldFail = false;
        readStreamEventForwardResult = null;
    };

    var subscribeToStream = function subscribeToStream() {
        console.log('mock stream subscription');
        subscription = new SubscriptionMock();
        return subscription;
    };

    var subscribeToStreamFrom = function subscribeToStreamFrom() {
        console.log('mock stream subscription');
        subscription = new SubscriptionMock();
        return subscription;
    };

    var subscribeToAllFrom = function subscribeToAllFrom() {
        console.log('mock stream subscription');
        if (!subscription) {
            subscription = new SubscriptionMock();
        }
        return subscription;
    };

    var getSubscription = function getSubscription() {
        return subscription;
    };
    var getId = function getId() {
        return id;
    };

    var appendToStream = function appendToStream(streamName, data, cb) {
        console.log('mock append');
        if (!subscription) {
            subscription = new SubscriptionMock();
        }
        subscription.emit('event', data);

        if (_appendToStreamShouldFail) {
            cb(data);
        } else {
            cb(null, data);
        }
    };

    var readStreamEventsForward = function readStreamEventsForward(streamName, skipTake, cb) {
        console.log('mock read');
        var results = { streamName: streamName, skipTake: skipTake, result: readStreamEventForwardResult };
        if (_readStreamEventForwardShouldFail) {
            cb(readStreamEventForwardResult ? readStreamEventForwardResult : results);
        } else {
            cb(null, readStreamEventForwardResult ? readStreamEventForwardResult : results);
        }
    };
    var readStreamEventForwardShouldReturnResult = function readStreamEventForwardShouldReturnResult(result) {
        readStreamEventForwardResult = result;
    };
    var readStreamEventForwardShouldFail = function readStreamEventForwardShouldFail() {
        _readStreamEventForwardShouldFail = true;
    };
    var appendToStreamShouldFail = function appendToStreamShouldFail() {
        _appendToStreamShouldFail = true;
    };

    return {
        clean: clean,
        getId: getId,
        getSubscription: getSubscription,
        subscribeToStream: subscribeToStream,
        subscribeToStreamFrom: subscribeToStreamFrom,
        subscribeToAllFrom: subscribeToAllFrom,
        appendToStream: appendToStream,
        readStreamEventsForward: readStreamEventsForward,
        readStreamEventForwardShouldReturnResult: readStreamEventForwardShouldReturnResult,
        readStreamEventForwardShouldFail: readStreamEventForwardShouldFail,
        appendToStreamShouldFail: appendToStreamShouldFail
    };
};