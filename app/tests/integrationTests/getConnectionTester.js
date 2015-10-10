///**
// * Created by rharik on 6/10/15.
// */
//
//require('must');
//var gesConnection = require('../../src/gesConnection');
//var gesClient = require('ges-client');
//var logger = require('corelogger')();
//var container ;
//var setData;
//var auth;
//
//describe('gesConnection', function() {
//    var mut;
//    before(function(){
//        var options = {
//            //"dagon":{"logger":{"level":"silly"}},
//            "eventstore": {
//                "host": "172.17.5.3",
//                "systemUsers": {"admin": "admin"},
//                "adminPassword": "changeit"
//            }
//        };
//        container = require('../../registry')(options);
//        auth = {
//            username: gesClient.systemUsers.admin
//            , password: gesClient.systemUsers.defaultAdminPassword
//        };
//        setData = {
//            expectedMetastreamVersion: -1
//            , metadata: gesClient.createStreamMetadata({
//                acl: {
//                    readRoles: gesClient.systemRoles.all
//                }
//            })
//            , auth: auth
//        };
//
//
//
//
//        });
//
//    beforeEach(function(){
//    });
//    //
//    //context('passing proper args', ()=> {
//    //    it('should should return a connection', function () {
//    //        mut.must.not.be.null();
//    //        mut._handler._connectingPhase.must.equal('Connected');
//    //    })
//    //});
//
//    context('when calling subscription', ()=> {
//        it('should stay open', function async (done) {
//            mut = container.getInstanceOf('gesConnection');
//            var rx = container.getInstanceOf('rx');
//                auth = {
//                    username: gesClient.systemUsers.admin
//                    , password: gesClient.systemUsers.defaultAdminPassword
//                };
//                setData = {
//                    expectedMetastreamVersion: -1
//                    , metadata: gesClient.createStreamMetadata({
//                        acl: {
//                            readRoles: gesClient.systemRoles.all
//                        }
//                    })
//                    , auth: auth
//                };
//                mut.getStreamMetadata('$all', {auth:auth}, function(err,data) {
//                    console.log('err')
//                    console.log(err)
//                    console.log('data')
//                    console.log(data)
//                    if (err || !data) {
//                        mut.setStreamMetadata('$all', setData, function () {
//                            console.log('HHHHEEERRRREEEE')
//                        });
//                    }
//                });
//            var subscription = mut.subscribeToAllFrom();
//            rx.Observable.fromEvent(subscription, 'event').take(1).forEach(x=> {console.log(x);}, err=>{throw err}, ()=>done());
//
//            //mut._handler._connectingPhase.must.equal('Connected');
//        })
//    });
//});
//
