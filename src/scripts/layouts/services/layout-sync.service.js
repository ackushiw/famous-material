'use strict';
var servicename = 'layoutSync';

module.exports = function(app) {

    var dependencies = [];

    function service() {

        function sync(status) {
          
        }
        var add = function(a, b) {
            return a + b;
        };

        return {
            add: add
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};
