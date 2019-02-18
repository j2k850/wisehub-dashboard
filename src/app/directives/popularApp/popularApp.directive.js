(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('popularApp', popularApp);

    /** @ngInject */
    function popularApp() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/popularApp/popularApp.html'
        };
    }
})();