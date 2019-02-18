(function() {
  'use strict';

  angular.module('Wisehub')
      .directive('wisehubPanel', WisehubPanel);

  /** @ngInject */
  function WisehubPanel() {
      return {
          restrict: 'E',
          link: function (scope, element, attrs, controller) {
            console.log('link!');
          },
          templateUrl: 'app/directives/panel/panel.directive.html',
          scope: {
            name: '@',
            text: '@',
            number: '@',
            icon: '@',
            meassure: '@',
            percentage: '@',
            sizemd: '@',
            sizesm: '@'
          }
      };
  }
})();