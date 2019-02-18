'use strict';

angular.module('Wisehub', [
    'ngAnimate',
    'ngCookies',
    'ui.bootstrap',
    'ui.sortable',
    'ui.router',
    'ngTouch',
    'toastr',
    'smart-table',
    "xeditable",
    'ui.slimscroll',
    'ngJsTree',
    'angular-progress-button-styles',
    'Wisehub.theme',
    'chart.js',
    'ngLodash',
    'AngularStompDK'
])
.constant('ServiceUrl', 'http://localhost:8089')
.config(function(
    $stateProvider,
    $urlRouterProvider,
    ChartJsProvider,
    baSidebarServiceProvider,
    ngstompProvider
    ) {

    ngstompProvider
    .url('https://localhost:8443/api/gs-guide-websocket')
    .class(SockJS);


    ChartJsProvider.setOptions({
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2500
        },
        legend: {
            display: true,
            position: 'top'
        }
    });

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/auth.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
        .state('logout', {
            url: '/logout',
            controllerAs: 'logout',
            controller: ['$state', 'AuthenticationService', function($state, AuthenticationService) {

                AuthenticationService.logout().then(function() {
                    $state.go('login');
                });
            }]
        })
        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'views/main.html'
        })
        .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controllerAs: 'dash',
            controller: 'DashboardController',
            title: 'Dashboard',
            sidebarMeta: {
                icon: 'ion-android-home',
                order: 0,
                level: 0
            }
        })
        .state('main.finances', {
            url: '/finances',
            templateUrl: 'views/finances.html',
            controllerAs: 'finances',
            controller: 'FinancesController',
            'title': 'Finance Manager'
        })
        .state('main.sales', {
            url: '/sales',
            templateUrl: 'views/sales.html',
            controllerAs: 'sales',
            controller: 'SalesController',
            title: 'Sales Driver'
        })
        .state('main.rules', {
            url: '/rules/:id',
            templateUrl: 'views/rules.html',
            controllerAs: 'rules',
            controller: 'RulesController',
            'title': 'Product Rules'
        })
        .state('main.products', {
            url: '/products',
            templateUrl: 'views/products.html',
            controllerAs: 'products',
            controller: 'ProductsController',
            title: 'Product Management'
        })
        .state('main.insights', {
            url: '/insights',
            templateUrl: 'views/insights.html',
            controllerAs: 'insights',
            controller: 'InsightsController',
            title: 'Insights'
        })
        .state('main.profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controllerAs: 'profile',
            controller: 'ProfileController',
            title: 'Customer profile'
        })
        .state('main.customers', {
            url: '/customers',
            templateUrl: 'views/customers.html',
            controllerAs: 'customers',
            controller: 'CustomersController',
            title: 'User Management'
        })
        .state('main.billings', {
            url: '/billings',
            templateUrl: 'views/billings.html',
            controllerAs: 'billings',
            controller: 'BillingsController',
            title: 'Billing'
        })
        .state('main.account', {
            url: '/account',
            templateUrl: 'views/account.html',
            controllerAs: 'account',
            controller: 'AccountController',
            title: 'Account Management'
        })
        .state('main.settings', {
            url: '/settings',
            templateUrl: 'views/settings.html',
            controllerAs: 'settings',
            controller: 'SettingsController',
            title: 'Settings'
        });
        baSidebarServiceProvider.addStaticItem({
            title: 'Customers',
            icon: 'ion-ios-people',
            sidebarMeta: {
                order: 1,
                level: 0
            },
            subMenu: [{
                title: 'Finance Manager',
                stateRef: 'main.finances'
              },{
                title: 'Sales Driver',
                stateRef: 'main.sales'
              },{
                title: 'Insights',
                stateRef: 'main.insights'
              }]
          });

          baSidebarServiceProvider.addStaticItem({
            title: 'Administration',
            icon: 'ion-ios-cog',
            sidebarMeta: {
                order: 2,
                level: 0
            },
            subMenu: [{
                title: 'Account Management',
                stateRef: 'main.account'
            },{
                title: 'Product Management',
                stateRef: 'main.products'
              },{
                title: 'User Management',
                stateRef: 'main.customers'
              },{
                  title: 'Billing',
                  stateRef: 'main.billings'
              }
            ]
          });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
}).run(run);


run.$inject = [
    '$rootScope',
    '$location',
    '$cookies',
    '$http',
    'AuthenticationService'
];

function run(
    $rootScope,
    $location,
    $cookies,
    $http,
    AuthenticationService
) {
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedUser = AuthenticationService.getLoggedUser();
        var token =  AuthenticationService.getToken();
        var loggedIn = loggedUser && token;
        $rootScope.loggedIn = (restrictedPage) ? true : false;
        $rootScope.profilePicture = "user";
        $rootScope.userEmail = loggedUser;
        if (restrictedPage && !loggedIn) {
            $rootScope.loggedIn = false;
            $location.path('/login');
        }
    });
}
