'use strict';
var constantname = 'faMdBreakpoints';

module.exports = function(app) {
    app.constant(app.name + '.' + constantname, {
      'xs': '360',
      'sm': '600',
      'md': '960',
      'lg': '1200'
    });
};
