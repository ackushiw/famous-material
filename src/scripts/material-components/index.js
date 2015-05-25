'use strict';
require('angular-ui-router');
require('angular-material');
require('famous-angular');

var modulename = 'materialComponents';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'famous.angular', 'ngMaterial']);
    // inject:folders start
    require('./directives')(app);
    // inject:folders end
    return app;
};
