(function() {
    'use strict';

    angular
        .module('Wisehub')
        .filter('strictFilter', StrictFilter);
       
        function StrictFilter($filter){
            return function(input, predicate){
                return $filter('filter')(input, predicate);
            }
        }

})();