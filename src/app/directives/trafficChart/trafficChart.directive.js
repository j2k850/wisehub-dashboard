(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('trafficChart', trafficChart);

    /** @ngInject */
    function trafficChart() {
        return {
            restrict: 'E',
            controller: 'TrafficChartCtrl',
            templateUrl: 'app/directives/trafficChart/trafficChart.html'
        };
    }
})();