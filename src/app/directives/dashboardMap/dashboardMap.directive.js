(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('dashboardMap', dashboardMap);

    /** @ngInject */
    function dashboardMap() {
        return {
            restrict: 'E',
            controller: 'DashboardMapCtrl',
            templateUrl: 'app/directives/dashboardMap/dashboardMap.html'
        };
    }
})();