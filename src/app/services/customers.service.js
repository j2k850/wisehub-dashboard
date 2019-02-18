(function() {
    'use strict';

    angular
        .module('Wisehub')
        .factory('CustomersService', CustomersService);

        CustomersService.$inject = [
        '$http',
        'ServiceUrl',
        '$q'
    ];

    function CustomersService(
        $http,
        ServiceUrl,
        $q
    ) {
        var service = {};

        service.getFinances = getFinances;    

        return service;

        function getFinances() {
            return $http.get(ServiceUrl + '/api/users')
            .success(function(response){
                $q.resolve(response);
            }).error(function() { 
                $q.reject();
            });;
        }
    }

})();