'use strict';
/*eslint consistent-this:[2,  "faMdSidenavCtrl"] */
var directivename = 'faMdSidenav';

module.exports = function(app) {

    // controller
    var controllerDeps = ['$famous', 'main.layouts.layoutSync'];
    var controller = function($famous, layoutSync) {
        var faMdSidenavCtrl = this;
        console.log('sidenav height', faMdSidenavCtrl.height);
        //famous
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];

        //defaults
        var defaultClosedLeft = {
            align: [-1, 0],
            origin: [1, 0]
        };
        var defaultOpenLeft = {
            align: [0, 0],
            origin: [0, 0]
        };
        var defaultClosedRight = {
            align: [1, 0],
            origin: [0, 0]
        };
        var defaultOpenRight = {
            align: [1, 0],
            origin: [1, 0]
        };


        //set up
        faMdSidenavCtrl.mainView = {
            translate: new Transitionable([0, 0, 0]),
            size: new Transitionable([faMdSidenavCtrl.width, faMdSidenavCtrl.height]),
            align: new Transitionable([-1, 0]),
            origin: new Transitionable([1, 0])
        };
        faMdSidenavCtrl.backdrop = {
            translate: new Transitionable([0, 0, -1000]),
            size: new Transitionable([0, 0, ]),
            opacity: new Transitionable(0)
        };

        //conditions
        function navClose() {
            if(faMdSidenavCtrl.right === 'right') {
                faMdSidenavCtrl.mainView.align.set(defaultClosedRight);
            } else {
                faMdSidenavCtrl.mainView.align.set(defaultClosedLeft);
            }
            faMdSidenavCtrl.status = false;
        }

        function init(open, right, mode) {
            if(faMdSidenavCtrl.status) {
                navOpen();
            }
        }

        function navOpen() {
            if(faMdSidenavCtrl.position === 'right') {
                faMdSidenavCtrl.mainView.align.set(defaultOpenRight);
            } else {
                faMdSidenavCtrl.mainView.align.set(defaultOpenLeft);
            }
            faMdSidenavCtrl.status = true;
        }

        function toggle(open) {
            console.log('toggled');
            if(open) {
                navClose();
            } else {
                navOpen();
            }
        }

        faMdSidenavCtrl.control = {
            close: close,
            open: open,
            toggle: toggle
        };

        init(faMdSidenavCtrl.status, faMdSidenavCtrl.position, faMdSidenavCtrl.mode);

        faMdSidenavCtrl.directivename = directivename;
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = ['main.layouts.layoutSync'];
    var directive = function(layoutSync) {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                position: '@',
                status: '=',
                width: '@navWidth',
                height: '@nanHeight',
                mode: '@',
                control: '='
                    // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            transclude: true,
            controller: controller,
            controllerAs: 'faMdSidenavCtrl',
            bindToController: true,
            template: require('./fa-md-sidenav.directive.html'),
            compile: function(tElement, tAttrs) {
                return {
                    pre: function(scope, element, attrs) {

                    },
                    post: function(scope, element, attrs, ctrl, transclude) {

                    }
                };
            }
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
