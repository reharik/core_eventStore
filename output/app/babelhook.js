'use strict';

require("babel/register")({
    stage: 1,
    ignore: ['uuid.js', 'lodash', 'moment', 'rx', 'winston']
});