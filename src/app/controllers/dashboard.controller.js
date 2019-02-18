(function() {
  "use strict";

  angular
    .module("Wisehub")
    .controller("DashboardController", DashboardController);

  DashboardController.$inject = [
    '$scope',
    'DashboardService',
    'lodash'
  ];

  function DashboardController(
    $scope,
    DashboardService,
    lodash
  ) {
    var vm = this;
    vm.colors = [
        '#005562',
        '#0e8174',
        '#6eba8c',
        '#b9f2a1',
        '#10c4b5'
    ];

    vm.selectOptions = [
      {value: 1, label: 'Day'},
      {value: 2, label: 'Week'},
      {value: 3, label: 'Month'},
      {value: 4, label: 'Year'}
    ];

    vm.currentFilter = 4;
    vm.updateData = updateData;

    updateData();
    vm.accountsOpenedChart = {
      labels: ["EazySave Premium Account", "Salary Current Account", "SME Enterprise Account"],
      data: [300, 500, 100]
    };

    vm.accountsOpenedChart = {
      labels: ["EazySave Premium Account", "Salary Current Account", "SME Enterprise Account"],
      data: [300, 500, 100]
    };

    vm.accountsPendingChart = {
      labels: ["EazySave Premium Account", "Salary Current Account", "SME Enterprise Account"],
      data: [300, 500, 100]
    };

    vm.paymentsReceivedChart = {
      labels: ["EazySave Premium Account", "Salary Current Account", "SME Enterprise Account"],
      data: [300, 500, 100]
    };

    vm.topTransactionsChart = {
      labels: ["Salary Deposit", "Airtime Topup", "Electricity"],
      data: [300, 500, 100]
    };

    vm.overdraftCustomerChart = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: ["Overdraft Customers"],
      data: [[65, 59, 80, 81, 56, 55, 40, 30, 40, 50,10,34]]
    };

    vm.inactiveUsersChart = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: ["Inactive Users"],
      data: [[650, 590, 800, 810, 560, 550, 400, 300, 400, 500,100,450]]
    };
    vm.smartTablePageSize = 10;
    vm.smartTableData = [
      {
        id: 1,
        firstName: "Mark",
        lastName: "Otto",
        username: "@mdo",
        email: "mdo@gmail.com",
        age: "28"
      },
      {
        id: 2,
        firstName: "Jacob",
        lastName: "Thornton",
        username: "@fat",
        email: "fat@yandex.ru",
        age: "45"
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        username: "@twitter",
        email: "twitter@outlook.com",
        age: "18"
      },
      {
        id: 4,
        firstName: "John",
        lastName: "Snow",
        username: "@snow",
        email: "snow@gmail.com",
        age: "20"
      },
      {
        id: 5,
        firstName: "Jack",
        lastName: "Sparrow",
        username: "@jack",
        email: "jack@yandex.ru",
        age: "30"
      },
      {
        id: 6,
        firstName: "Ann",
        lastName: "Smith",
        username: "@ann",
        email: "ann@gmail.com",
        age: "21"
      },
      {
        id: 7,
        firstName: "Barbara",
        lastName: "Black",
        username: "@barbara",
        email: "barbara@yandex.ru",
        age: "43"
      },
      {
        id: 8,
        firstName: "Sevan",
        lastName: "Bagrat",
        username: "@sevan",
        email: "sevan@outlook.com",
        age: "13"
      },
      {
        id: 9,
        firstName: "Ruben",
        lastName: "Vardan",
        username: "@ruben",
        email: "ruben@gmail.com",
        age: "22"
      },
      {
        id: 10,
        firstName: "Karen",
        lastName: "Sevan",
        username: "@karen",
        email: "karen@yandex.ru",
        age: "33"
      },
      {
        id: 11,
        firstName: "Mark",
        lastName: "Otto",
        username: "@mark",
        email: "mark@gmail.com",
        age: "38"
      },
      {
        id: 12,
        firstName: "Jacob",
        lastName: "Thornton",
        username: "@jacob",
        email: "jacob@yandex.ru",
        age: "48"
      },
      {
        id: 13,
        firstName: "Haik",
        lastName: "Hakob",
        username: "@haik",
        email: "haik@outlook.com",
        age: "48"
      },
      {
        id: 14,
        firstName: "Garegin",
        lastName: "Jirair",
        username: "@garegin",
        email: "garegin@gmail.com",
        age: "40"
      },
      {
        id: 15,
        firstName: "Krikor",
        lastName: "Bedros",
        username: "@krikor",
        email: "krikor@yandex.ru",
        age: "32"
      }
    ];

    function populateCustomerGraphs(response) {
      var feedbackData = lodash.get(response, 'data.top_customers_feedback');
      vm.customerFeedbackChart = {
        labels: lodash.map(feedbackData, function(item){
          return item.feedback;
        }).slice(0, 5),
        data: lodash.map(feedbackData, function(item){
            return item.hits;
          }).slice(0, 5),
        options: {
          legend: {
            display: false
          }
        }
      };
      var topCustomersData = lodash.get(response, 'data.top_customers_clv');
      vm.customerTopChart = {
        labels: lodash.map(topCustomersData, function(item){
          return item.customer_full_name;
        }).slice(0, 5),
        data: lodash.map(topCustomersData, function(item){
            return item.amount;
          }).slice(0, 5),
          options: {
            legend: {
              display: false
            }
          }
      };

      var clvData = lodash.get(response, 'data.avg_customer_clv');
      vm.customerLifetimeChart = {
        labels: lodash.map(clvData, function(item){
          return item.month;
        }),
        series: ["AVG"],
        data: [
          lodash.map(clvData, function(item){
            return item.average;
          })
        ]
      };

    }

    function populatePanels(response) {
      vm.firstPanelRow = {
        sm: 6,
        md: 4
      };
      vm.secondPanelRow = {
        sm: 6,
        md: 6
      };
      var totalCustomers = Number(lodash.get(response, 'data.customers_notified')) + Number(lodash.get(response, 'data.customers_responded'));
      vm.customersNotified = {
        name: "Customers Notified ",
        number: lodash.get(response, 'data.customers_notified'),
        percentage: Math.ceil(Number(lodash.get(response, 'data.customers_notified')/totalCustomers) * 100),
        textClass: "danger",
        iconClass: "bolt",
        measure: ""
      };
      vm.averageNotification = {
        name: "Average Frequency of Notification",
        number: lodash.get(response, 'data.avg_frequency_of_notification'),
        percentage: "64",
        textClass: "info",
        iconClass: "level-up",
        measure: ""
      };
      vm.customersResponded = {
        name: " Customers Responded",
        number: lodash.get(response, 'data.customers_responded'),
        percentage: Math.ceil(Number(lodash.get(response, 'data.customers_responded')/totalCustomers) * 100),
        textClass: "warning",
        iconClass: "level-down",
        measure: ""
      };

      vm.pendingCustomers = {
        name: "Pending Customers",
        number: lodash.get(response, 'data.customers_pending'),
        percentage: Math.ceil(Number(lodash.get(response, 'data.customers_pending')/totalCustomers) * 100),
        textClass: "info",
        iconClass: "level-up",
        measure: ""
      };

      vm.activeCustomers = {
        name: "Newly Active Customers",
        number: lodash.get(response,'data.customers_newly_active'),
        percentage: Math.ceil(Number(lodash.get(response, 'data.customers_newly_active')/totalCustomers) * 100),
        textClass: "info",
        iconClass: "level-up",
        measure: ""
      };
    }

    function updateData(){
      DashboardService.getDashboardInfo(vm.currentFilter).then(function(response){
        populatePanels(response);
        populateCustomerGraphs(response);
      }).catch(function(){
        console.log('Response :(');
      });
    }
  }
})();
