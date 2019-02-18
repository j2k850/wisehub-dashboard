(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [];

    function ProfileController() {
        var vm = this;
        vm.smartTablePageSize = 5;
        vm.events = [{
                name: 'Event 1',
                description: 'Description 1',
                eventDate: 'March 22 2015 at 11:42 a.m.'
            },{
                name: 'Event 2',
                description: 'Description 2',
                eventDate: 'March 22 2015 at 11:42 a.m.'
           },{
                name: 'Event 3',
                description: 'Description 3',
                eventDate: 'March 22 2015 at 11:42 a.m.'
            },{
                name: 'Event 4',
                description: 'Description 4',
                eventDate: 'March 22 2015 at 11:42 a.m.'
             }
        ];

        vm.sales = [{
            name: 'Engagements',
            value: 10
        },{
            name: 'Loans',
            value: 10
        },{
            name: 'Insurances',
            value: 15
        },{
            name: 'Investments',
            value: 20
         }
        ];

        vm.finances = [{
            name: 'Engagements',
            value: 10
        },{
            name: 'Loans',
            value: 10
        },{
            name: 'Insurances',
            value: 15
        },{
            name: 'Investments',
            value: 20
         }
        ];
    }
})();