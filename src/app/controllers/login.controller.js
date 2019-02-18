(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
        '$location',
        'AuthenticationService',
        'FlashService'
    ];

    function LoginController(
        $location,
        AuthenticationService,
        FlashService
    ) {
        var vm = this;
        vm.error = false;
        vm.user = {};
        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.clearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.login(vm.user.email, vm.user.password)
                .then( function(response) {
                    $location.path('/main/dashboard');
                })
                .catch( function(e){
                    FlashService.error('Wrong email or password');
                    vm.error = true;
                    vm.dataLoading = false;
                });
        };

    }

})();