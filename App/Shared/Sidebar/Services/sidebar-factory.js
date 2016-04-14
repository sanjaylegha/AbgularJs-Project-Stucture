'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.myFactory
 * @description
 * # myFactory
 * Factory in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .factory('myFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
