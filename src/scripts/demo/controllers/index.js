'use strict';

module.exports = function(app) {
    // inject:start
    require('./main.controller')(app);
    // inject:end
};