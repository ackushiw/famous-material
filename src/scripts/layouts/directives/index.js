'use strict';

module.exports = function(app) {
    // inject:start
    require('./fa-md-app.directive')(app);
    require('./resize.directive')(app);
    // inject:end
};