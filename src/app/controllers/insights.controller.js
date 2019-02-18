(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('InsightsController', InsightsController);

    InsightsController.$inject = [
        'lodash'
    ];

    function InsightsController(_) {
        var vm = this;
        vm.pageSize = 5;
        vm.secondPanelRow = {
            sm: 6,
            md: 6
        };
        vm.colors = [
            '#005562',
            '#0e8174',
            '#6eba8c',
            '#b9f2a1',
            '#10c4b5'
        ];
        vm.productsrecommended = {
            labels: ["EazySave Premium Account", "Salary Current Account", "SME Enterprise Account"],
            data: [5000, 10500, 3400]
          };

        vm.productBreakDown = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            series: ["EazySave Premium Account", "Zenith Premium Funds"],
            data: [[650, 590, 800, 810, 960, 1050, 1051, 1200, 1340, 1090, 1990, 1865], [280, 480, 400, 190, 860, 270, 900, 200, 300, 500, 990, 865]]
        };

        vm.customersRationaleChart = {
            labels: ["insufficient funds", "not applicable to them", "want purchase the product from a competitor"],
            data: [300, 500, 100]
        };

        vm.inactiveChart = {
            labels: ["dormant accounts", "accounts with no deposits in 6 months", ", accounts with no transactional activity,"],
            data: [300, 100, 800]
        };

        vm.customerSituationChart = {
            labels: ["With Children", "Married", "Saving for retirement", "Employed"],
            data: [300, 500, 100, 200]
        };

        vm.potentialCustomers = [
            {
                name: "Baba Okafor",
                email: "bokafor@gmail.com",
                description: "Salary Current Account, SME Enterprise Account, Term Loan, Zenith Premium Funds"
            },
            {
                name: "Victor Umenyiora",
                email: "vumenyiora@gmail.com",
                description: "EazySave Premium Account, Salary Current Account"
            },
            {
                name: "Greg Orakpo",
                email: "gorakpo",
                description: "Zenith Premium Funds"
            },
            {
                name: "Bungalows",
                email: "bungalows@gmail.com",
                description: "SME Enterprise Account"
            },
            {
                name: "Yellow Chilli",
                email: "ychilli@gmail.com",
                description: "SME Enterprise Account,Zenith Premium Funds"
            }
        ];

        vm.customersNotRecommendation = [
            {
                name: "Mark Otto",
                email: "mdo@gmail.com"
            },
            {
                name: "Jacob Thornton",
                email: "fat@yandex.ru"
            },
            {
                name: "Larry Bird",
                email: "twitter@outlook.com"
            },
            {
                name: "John Snow",
                email: "snow@gmail.com"
            },
            {
                name: "John Talabi",
                email: "jtalabi@gmail.com"
            }
        ];

        vm.recommendedCustomers = {
            name: "Customers Recommended",
            number: 1230,
            percentage: "64",
            textClass: "info",
            iconClass: "level-up",
            measure: ""
        };

        vm.dolarsEarnt = {
            name: "Fee Earned",
            number: 1230,
            percentage: "64",
            textClass: "info",
            iconClass: "level-up",
            measure: ""
        };

        vm.dolarAmountChart = {
            labels: ["EazySave Premium Account", "Salary Current Account", "SME Enterprise Account", "Term Loan", "Zenith Premium Funds"],
            data: [100, 500, 150, 200, 300]
        };

    }
})();
