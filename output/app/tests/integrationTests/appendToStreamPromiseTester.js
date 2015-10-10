/**
 * Created by rharik on 6/10/15.
 */

'use strict';

require('must');
//var eventStore = require('../../index');

describe('appendToStreamPromiseTester', function () {
    var mut;
    var EventData;
    var uuid;
    var options = {
        dagon: {
            logger: {
                moduleName: 'EventModels'
            }
        },
        logger: {
            moduleName: 'EventModels'
        }
    };
    var container = require('../../registry')(options);

    before(function () {
        console.log(container.whatDoIHave());
        //mut = eventStore.appendToStreamPromise
    });

    beforeEach(function () {});

    context('append to stream', function () {
        it('should throw error if no stream provided', function () {
            //(function(){mut()}).must.throw(Error,'Invariant Violation: must pass a valid stream name');
        });
        //
        //it('should throw error if no expectedVersion provided', ()=>{
        //    (function(){mut('myTestStream',{})}).must.throw(Error,'Invariant Violation: must pass data with an expected version of aggregate');
        //});
        //
        //it('should throw error if no events provided', ()=>{
        //    var appendData = {
        //        expectedVersion: -2
        //    };
        //    (function(){mut('myTestStream',appendData)}).must.throw(Error,'Invariant Violation: must pass data with at least one event');
        //});
        //
        //it('should resolve with success', async ()=> {
        //    var appendData = { expectedVersion: -2};
        //    appendData.events = [new EventData( 'testing1', { data:'someData' }, {eventTypeName:'testingEventNotificationOff'})];
        //    var result = await mut('myTestStream',appendData);
        //    result.Status.must.equal('Success');
        //})
    });
});