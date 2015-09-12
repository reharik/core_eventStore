/**
 * Created by parallels on 9/3/15.
 */
var dagon = require('dagon');

module.exports = function(_options) {
    var options = _options || {};
    var container = dagon(options);
    return new container(x=>
        x.pathToRoot(__dirname)
            .requireDirectoryRecursively('./src')
            .for('bluebird').withThis('Promise')
            .for('corelogger').renameTo('logger').instanciate(i=>i.asFunc().withParameters(options.logger || {}))
            .for('gesConnection').instanciate(i=>i.asFunc().withParameters(options.eventstore || {}))
            .complete());
};
