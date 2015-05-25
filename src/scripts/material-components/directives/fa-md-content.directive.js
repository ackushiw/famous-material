'use strict';
 /*eslint consistent-this:[2,  "faMdContentCtrl"] */
var directivename = 'faMdSurface';

module.exports = function(app) {

    // controller
    var controllerDeps = [];
    var controller = function() {
        var faMdSurfaceCtrl = this;
        faMdSurfaceCtrl.directivename = directivename;
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = ['$q'];
    var directive = function($q) {
        return {
            restrict: 'E',
            transclude: true,
            controller: controller,
            controllerAs: 'faMdSurfaceCtrl',
            bindToController: true,
            template: require('./fa-md-content.directive.html'),
            compile: function(tElement, tAttrs) {
                return {
                    pre: function(scope, element, attrs) {

                    },
                    post: function(scope, element, attrs) {
                      attrs.$observe('width', function (width) {
                        scope.surfaceWidth = width;
                      });

                    }
                };
            }
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
