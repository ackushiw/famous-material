'use strict';

module.exports = function(app) {
    // inject:start
    require('./layout-sync.service')(app);
    // inject:end
};