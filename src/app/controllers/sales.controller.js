(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('SalesController', SalesController);
       
        SalesController.$inject = [
            'ngstomp',
            'AuthenticationService'
        ];



    function SalesController(ngstomp,AuthenticationService) {
        var vm = this;
        vm.items = [];
        vm.newItems = [];
        vm.pageSizes = 5;


        vm.smartTablePageSize = 10;
        vm.tableData = [{
            customerName: 'Barbara Iyayi',
            branch: 'Abuja',
            salesRecommended: '3',
            salesOpened: '3',
            salesPending: '2',
            salesClosed: '1',
            hitRatio: '100%',
            closeRatio: '33%',
            ltv: '₦10000',
            earnings: '₦30000'
        },{
            customerName: 'Jude Okafor',
            branch: 'Victoria Island',
            salesRecommended: '2',
            salesOpened: '1',
            salesPending: '1',
            salesClosed: '0',
            hitRatio: '50%',
            closeRatio: '0%',
            ltv: '₦1000',
            earnings: '₦3000'
        },{
            customerName: 'Baba Talabi',
            branch: 'Yola',
            salesRecommended: '0',
            salesOpened: '0',
            salesPending: '0',
            salesClosed: '0',
            hitRatio: '0%',
            closeRatio: '0%',
            ltv: '₦100',
            earnings: '₦0'
        },{
            customerName: 'Susan Ademola',
            branch: 'Jalingo',
            salesRecommended: '4',
            salesOpened: '4',
            salesPending: '0',
            salesClosed: '4',
            hitRatio: '100%',
            closeRatio: '100%',
            ltv: '₦2300',
            earnings: '₦50000'
        },{
            customerName: 'Dolores Adetokunbo',
            branch: 'Kano',
            salesRecommended: '1',
            salesOpened: '1',
            salesPending: '0',
            salesClosed: '1',
            hitRatio: '100%',
            closeRatio: '100%',
            ltv: '₦7300',
            earnings: '₦100000'
        }];

        ngstomp
            .subscribeTo('/topic/saleEvent')
            .callback(whatToDoWhenMessageComming)
            .connect();

        function whatToDoWhenMessageComming(message) {
            var response = JSON.parse(message.body);
            if(response.hasOwnProperty('event')){
                vm.newItems.push(response);
                if (vm.newItems.length > 5){
                    vm.newItems.shift();
                }
            }
        }

        var objectToSend = { content : 'Hello Web-Socket', amount : 10, seconds : 30};
        ngstomp
                .send('/app/hello', objectToSend);

    }

})();
