(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('dashboardLineChart', dashboardLineChart);

    /** @ngInject */
    function dashboardLineChart() {
        return {
            restrict: 'E',
            controller: 'DashboardLineChartCtrl',
            templateUrl: 'app/directives/dashboardLineChart/dashboardLineChart.html'
        };
    }
})();