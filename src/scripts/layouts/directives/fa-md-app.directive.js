'use strict';
 /*eslint consistent-this:[2,  "faMdAppCtrl"] */
var directivename = 'faMdApp';

module.exports = function(app) {

    // controller
    var controllerDeps = [];
    var controller = function() {
        var faMdAppCtrl = this;
        faMdAppCtrl.directivename = directivename;
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directive = function() {
        return {
            restrict: 'AE',
            transclude: true,
            controller: controller,
            controllerAs: 'faMdAppCtrl',
            bindToController: true,
            template: require('./fa-md-app.directive.html'),
            compile: function(tElement, tAttrs) {
                return {
                    pre: function(scope, element, attrs) {

                    },
                    post: function(scope, element, attrs) {

                    }
                };
            }
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
