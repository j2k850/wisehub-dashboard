(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('dashboardCalendar', dashboardCalendar);

    /** @ngInject */
    function dashboardCalendar() {
        return {
            restrict: 'E',
            controller: 'DashboardCalendarCtrl',
            templateUrl: 'app/directives/dashboardCalendar/dashboardCalendar.html'
        };
    }
})();