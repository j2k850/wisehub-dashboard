(function() {
    'use strict';

    angular
        .module('Wisehub')
        .factory('UserService', UserService);

    UserService.$inject = [
        '$http',
        'ServiceUrl',
        '$q',
        'AuthenticationService'
    ];

    function UserService(
        $http,
        ServiceUrl,
        $q,
        AuthenticationService
    ) {
        var service = {};

        service.getAll = getAll;
        service.getById = getById;
        service.getByEmail = getByEmail;
        service.create = create;
        service.update = update;
        service.deleteUser = deleteUser;

        return service;

        function getAll() {
            return $http.get(ServiceUrl + '/api/dashboard_users',{ 
                'headers' : {
                    'Authorization': AuthenticationService.getToken()
                }
            }).success(function(response){
                $q.resolve(response);
            }).error(function() { 
                $q.reject();
            });
        }
        
        function deleteUser(id) {
            return $http.delete( ServiceUrl + '/api/dashboard_users/' + id , {
                'headers' : {
                    'Authorization': AuthenticationService.getToken(),
                    'Accept': 'text/plain'                    
                }
            }).success(function(response){
                $q.resolve(response);
            }).error(function() { 
                $q.reject();
            });
        }

        function getById(id) {
            return $http.get(ServiceUrl + '/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function getByEmail(email) {
            return $http.get(ServiceUrl + '/api/users/' + email).then(handleSuccess, handleError('Error getting user by email'));
        }

        function create(user) {
            return $http.post(ServiceUrl + '/api/register',{
                username: user.username,
                email: user.email,
                password: user.password
            }, { headers : {
                    'Accept': 'text/plain'
                }
            }).success(function(response){
                $q.resolve(response);
            }).error(function() { 
                $q.reject();
            });
        }

        function update(user) {
            return $http.put(ServiceUrl + '/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        // private functions

        function handleSuccess(res) {
        }

        function handleError(error) {
        }
    }

})();