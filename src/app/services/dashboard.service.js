(function() {
    'use strict';

    angular.module('Wisehub')
        .factory('DashboardService', DashboardService);

    /** @ngInject */
    DashboardService.$inject = [
        '$http',
        'ServiceUrl',
        '$q',
        'AuthenticationService'
    ];
    function DashboardService(
        $http,
        ServiceUrl,
        $q,
        AuthenticationService
    ) {
        var service = {};
        service.getDashboardInfo = getDashboardInfo;    
    
            return service;
    
            function getDashboardInfo(param) {
                return $http.get(ServiceUrl + '/api/board/customers_statistics?filter=' + param,{ headers : {
                    'Authorization': AuthenticationService.getToken()
                }}).success(function(response){
                    $q.resolve(response);
                }).error(function() { 
                    $q.reject();
                });
            }
    }
})();