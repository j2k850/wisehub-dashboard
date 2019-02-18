(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('CustomersController', CustomersController);

    CustomersController.$inject = [
        'lodash',
        'UserService',
        '$uibModal'
    ];

    function CustomersController(
        _,
        UserService,
        $uibModal
    ) {
        var vm = this;
        vm.smartTablePageSize = 10;    
        vm.users = [];
        vm.newUsers = [];
        vm.userToDelete = -1;  

        vm.getUsers = getUsers;
        vm.deleteModal = deleteModal;
        vm.deleteUser = deleteUser;
        vm.newCustomerModal = newCustomerModal;
        vm.addNewCustomer = addNewCustomer;
        
        getUsers();

        function addNewCustomer(name, email) {
            var newCustomer = {
                id: 'Some id',
                name: {
                    firstName : name
                },
                updatedAt: '11.22.2017',
                email: email
            };
            vm.newUsers.push(newCustomer);
        }

        function newCustomerModal(){
            $uibModal.open({
                animation: true,
                templateUrl: 'views/customer.modal.html',
                size: 'md',
                resolve: {
                    parent: function(){
                        return vm;
                    }
                },
                controller: function($scope, parent){
                    $scope.parent;
                    $scope.customerName = '';
                    $scope.customerEmail = '';
                    $scope.submit = function(){
                        if( $scope.newCustomerForm.$valid){
                            parent.addNewCustomer($scope.customerName, $scope.customerEmail);
                            $scope.$close();
                        }    
                    };
                }
            });
        }

        function getUsers(){
            UserService.getAll().then(function(response){
                vm.newUsers = _.clone(response.data);
            });
        }

        function deleteUser(id){
            _.remove(vm.users, function(currentObject) {
                return currentObject.id === id;
            });
            _.remove(vm.newUsers,
                function(currentObject) {
                    return currentObject.id === id;
            });
        }

        function deleteModal(userId){
            vm.userToDelete = userId;
            vm.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/delete.modal.html',
                size: 'sm',
                resolve: {
                    id: function(){
                        return vm.userToDelete;        
                    },
                    parent: function(){
                        return vm;
                    }
                },
                controller: function($scope, id, parent){
                    $scope.id = id;
                    $scope.parent;
                    $scope.ok = function(){
                        UserService.deleteUser($scope.id).then(function(){
                            $scope.$close();                            
                            parent.deleteUser($scope.id);
                        }).catch(function(){ //remove this when service work
                            $scope.$close();
                            parent.deleteUser($scope.id);
                        });
                    };
                }
            });
        }
    }
})();