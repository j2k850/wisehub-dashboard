(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = [       
        'lodash',
        '$uibModal',
        '$location'
    ];

    function ProductsController(
        _, 
        $uibModal,
        $location
    ) {
        var vm = this;
        vm.pageSize = 10;  
        vm.currentId = 5;
        vm.products = [
            {
                id: 1,
                name: 'Savings',
                description: 'Bla bla bla',
                active: true
            }, {
                id: 2,
                name: 'Loans',
                description: 'bla bla bla',
                active: false,
            },{
                id: 3,
                name: 'Investments',
                description: 'bla bla bla',
                active: false,
            }, {
                id: 4,
                name: 'Insurance',
                description: 'bla bla bla',
                active: true,
            }
        ];
        vm.newProducts = vm.products;
        vm.userToDelete = -1;

        vm.deleteModal = deleteModal;
        vm.newItemModal = newItemModal;
        vm.addNewProduct = addNewProduct;
        vm.rules = rules;
        
        function rules(id){
            $location.path('/main/rules/' + id);            
        }

        function newItemModal(){
            $uibModal.open({
                animation: true,
                templateUrl: 'views/new.product.modal.html',
                size: 'md',
                resolve: {
                    parent: function(){
                        return vm;
                    }
                },
                controller: function($scope, parent){
                    $scope.parent;
                    $scope.productName = '';
                    $scope.productDescription = '';
                    $scope.submit = function(){
                        if( $scope.newProductForm.$valid){
                            parent.addNewProduct($scope.productName, $scope.productDescription);
                            $scope.$close();
                        }    
                    };
                }
            });
        }

        function addNewProduct(name, description) {
            var newProduct = {
                id: vm.currentId,
                name: name,
                description: description,
                active: true
            };
            vm.currentId++;
            vm.newProducts.push(newProduct);
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
                        /**
                         * @TODO: apply deletion
                         */
                        $scope.$close();                            
                    };
                }
            });
        }
    }
})();