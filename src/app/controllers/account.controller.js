(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('AccountController', AccountController);

        AccountController.$inject = [];

    function AccountController() {
        var vm = this;
        vm.numberOfUsers = 1;
        
        vm.tiers = [{
            name: 'Tier 1',
            value: 10,
            id: 1    
        }, {
            name: 'Tier 2',
            value: 12,
            id: 2
        }, {
            name: 'Tier 3',
            value: 7,
            id: 3
        }, {
            name: 'Tier 4',
            value: 15,
            id: 4
        }];
        vm.currentTier = 1;
        vm.getValue = getValue;

        function getValue(){
            var currentAccount = vm.tiers.find(function(item){
                return item.id === Number(vm.currentTier);        
            });
            return currentAccount.value; 
        }
    }
})();