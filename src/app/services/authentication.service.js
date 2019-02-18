(function() {
    'use strict';

    angular
        .module('Wisehub')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = [
        '$http',
        '$cookies',
        '$rootScope',
        '$timeout',
        'FakeUserService',
        '$q',
        'ServiceUrl'
    ];

    function AuthenticationService(
        $http,
        $cookies,
        $rootScope,
        $timeout,
        UserService,
        $q,
        ServiceUrl
    ) {

        var service = {};

        service.login = Login;
        service.logout = Logout;
        service.setCredentials = setCredentials;
        service.clearCredentials = ClearCredentials;
        service.getToken = getToken;
        service.getLoggedUser = getLoggedUser;
        return service;

        function Login(email, password ) {
            return $http.post(ServiceUrl + '/api/auth', { email: email, password: password })
                .success(function (response) {
                    setCredentials(email, password, response.token);
                    $q.resolve(response);        
                })
                .error(function() { 
                    $q.reject();
                });
        }

        function Logout() {
            ClearCredentials();
            return $q.resolve();
        }

        function setCredentials(email, password, authToken) {
            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 7);
            $cookies.putObject('globals', email, { expires: cookieExp });
            $cookies.putObject('token', authToken, {expires: cookieExp});
        }

        function getToken(){
            return $cookies.getObject('token');
        }

        function getLoggedUser(){
            return $cookies.getObject('globals');
        }

        function ClearCredentials() {
            $cookies.remove('globals');
            $cookies.remove('token');
        }
    }
})();