(function() {
    'use strict';

    angular.module('Wisehub')
        .directive('blurFeed', blurFeed);

    /** @ngInject */
    function blurFeed() {
        return {
            restrict: 'E',
            controller: 'BlurFeedCtrl',
            templateUrl: 'app/directives/blurFeed/blurFeed.html'
        };
    }
})();