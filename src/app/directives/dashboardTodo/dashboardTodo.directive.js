(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('dashboardTodo', dashboardTodo);

    /** @ngInject */
    function dashboardTodo() {
        return {
            restrict: 'EA',
            controller: 'DashboardTodoCtrl',
            templateUrl: 'app/directives/dashboardTodo/dashboardTodo.html'
        };
    }
})();