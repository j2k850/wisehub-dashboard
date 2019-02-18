(function() {
    'use strict';

    angular
        .module('Wisehub')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = [];

    function SettingsController() {
        console.log('In here!');
    }
})();