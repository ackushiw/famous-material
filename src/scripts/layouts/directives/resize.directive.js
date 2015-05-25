'use strict';
var directivename = 'faMdResize';

module.exports = function(app) {

    // directive
    var directiveDeps = ['resize', '$rootScope', '$window', 'main.layouts.faMdBreakpoints', '$log'];
    var directive = function(resize, $rootScope, $window, faMdBreakpoints, $log) {
        return {
            restrict: 'A',
            link: function($scope, $element) {
                $scope.$on('resize', function($event) {
                    var width = $window.innerWidth;
                    var height = $window.innerHeight;
                    $log.log('Width: ' + width + ' & ' + 'Height: ' + height);
                    $rootScope.faMdWidth = width;
                    $rootScope.faMdHeight = height;

                    if(width > height) {
                        $rootScope.faMdLandscape = true;
                        $rootScope.faMdPortrait = false;
                    } else {
                        $rootScope.faMdLandscape = false;
                        $rootScope.faMdPortrait = true;
                    }
                    var device = {
                      xs: false,
                      sm: false,
                      md: false,
                      lg: false,
                      gtXs: false,
                      gtSm: false,
                      gtMd: false,
                      gtLg: false
                    };
                    if(width < faMdBreakpoints.xs) {
                        device.xs = true;
                    } else {
                        device.gtXs = true;
                        if(width < faMdBreakpoints.sm) {
                            device.sm = true;
                        } else {
                            device.gtSm = true;
                            if(width < faMdBreakpoints.md) {
                                device.md = true;
                            } else {
                                device.gtMd = true;
                                if(width < faMdBreakpoints.lg) {
                                    device.lg = true;
                                } else {
                                    device.gtLg = true;
                                }
                            }

                        }

                    }
                    $rootScope.faMdDevice = device;

                });
            }
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
