(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('dashboardPieChart', dashboardPieChart);

    /** @ngInject */
    function dashboardPieChart() {
        return {
            restrict: 'E',
            controller: 'PanelController',
            templateUrl: 'app/directives/dashboardPieChart/dashboardPieChart.html'
        };
    }
})();