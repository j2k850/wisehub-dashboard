(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('RulesController', RulesController);

        RulesController.$inject = [
        '$location',
        '$uibModal'
    ];

    function RulesController(
        $location,
        $uibModal
    ) {
        var vm = this;
        vm.rules = [
            {
                id: 1,
                name: 'Age less than 21',
                active: true
            }, {
                id: 2,
                name: 'Salary less than USS 4000',
                active: false,
            },{
                id: 3,
                name: 'Credit rate grather than 5',
                active: false,
            }
        ];
        vm.newRules = vm.rules;
        vm.deleteModal = deleteModal;
        vm.newRuleModal = newRuleModal;
        vm.conditions = [];
        function newRuleModal(){
            $uibModal.open({
                animation: true,
                templateUrl: 'views/rules.modal.html',
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
                    $scope.conditions = [];
                    $scope.actions = [];
                    $scope.addCondition = function(){
                        $scope.conditions.push({});
                    };

                    $scope.removeCondition = function(index){
                        $scope.conditions.splice(index, 1);
                    };

                    $scope.removeAction = function(index){
                        $scope.actions.splice(index, 1);
                    };
                    $scope.addAction = function(){
                        $scope.actions.push({});
                    };
                    $scope.submit = function(){
                        $scope.$close(); 
                    };
                }
            });
        }

        function deleteModal(ruleId){
            vm.ruleToDelete = ruleId;
            vm.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/delete.modal.html',
                size: 'sm',
                resolve: {
                    id: function(){
                        return vm.ruleToDelete;        
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