(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('weather', weather);

    /** @ngInject */
    function weather() {
        return {
            restrict: 'EA',
            controller: 'WeatherCtrl',
            templateUrl: 'app/directives/weather/weather.html'
        };
    }
})();