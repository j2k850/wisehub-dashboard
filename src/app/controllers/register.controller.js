(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = [
        'UserService',
        '$location',
        '$rootScope',
        'FlashService'
    ];

    function RegisterController(
        UserService,
        $location,
        $rootScope,
        FlashService
    ) {
        var vm = this;
        vm.user = {};
        vm.register = register;
        vm.error = false;
        function register(form) {
            vm.dataLoading = true;
            UserService.create(vm.user)
                .then(function(response) {
                    $location.path('/login');
                }).catch( function(){
                    vm.dataLoading = false;
                    vm.error = true;
                });
        }
    }

})();