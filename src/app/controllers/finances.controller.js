(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('FinancesController', FinancesController);

        FinancesController.$inject = [];

    function FinancesController() {
        var vm = this;
        vm.smartTablePageSize = 5;
        vm.tableData = [{
            customerName: 'Barbara Iyayi',
            branch: 'Abuja',
            accounts: '1',
            sales: '3',
            earnings: '₦30000',
            lifeTimeValue: '₦10000',
            responseTime: '1.2',
            engagements: '1000',
            overdrafts: '1',
            inactive: '0',
            categories: 'Car Loan, Groceries, Electricity,Salary Deposit'
        }, {
            customerName: 'Jude Okafor',
            branch: 'Victoria Island',
            accounts: '2',
            sales: '4',
            earnings: '₦3000',
            lifeTimeValue: '₦1000',
            responseTime: '2.7',
            engagements: '50',
            overdrafts: '2',
            inactive: '0',
            categories: 'Mortgage, Water bill, Tuition,Salary Deposit'
        }, {
            customerName: 'Baba Talabi',
            branch: 'Yola',
            accounts: '1',
            sales: '₦0',
            earnings: '₦0',
            lifeTimeValue: '₦100',
            responseTime: '5',
            engagements: '12',
            overdrafts: '10',
            inactive: '0',
            categories: 'Salary Deposit,Car Loan'
        }, {
            customerName: 'Susan Ademola',
            branch: 'Jalingo',
            accounts: '2',
            sales: '4',
            earnings: '₦50000',
            lifeTimeValue: '₦2300',
            responseTime: '0.75',
            engagements: '500',
            overdrafts: '0',
            inactive: '0',
            categories: 'Savings Deposit, Investment Payment, Salary Deposit, Mortgage Payment'
        }, {
            customerName: 'Dolores Adetokunbo',
            branch: 'Kano',
            accounts: '1',
            sales: '1',
            earnings: '₦100000',
            lifeTimeValue: '₦7300',
            responseTime: '3.1',
            engagements: '18',
            overdrafts: '1',
            inactive: '0',
            categories: 'Salary Deposit, Car Loan, Electricity'
        }];
    }
})();
