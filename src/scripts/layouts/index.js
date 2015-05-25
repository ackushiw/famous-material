'use strict';
require('angular-ui-router');
require('angular-material');
require('famous-angular');
require('ng-resize');

var modulename = 'layouts';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'famous.angular', 'ngMaterial', 'ngResize']);
    // inject:folders start
    require('./constants')(app);
    require('./directives')(app);
    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/',
                template: require('./views/home.html')
            });
        }
    ]);
    return app;
};
