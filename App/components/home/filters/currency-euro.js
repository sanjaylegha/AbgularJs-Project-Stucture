'use strict';

/**
 * @ngdoc filter
 * @name angularProjectApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
