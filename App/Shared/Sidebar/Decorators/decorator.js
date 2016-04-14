'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.decorator:Servicename
 * @description
 * # Servicename
 * Decorator of the angularProjectApp
 */
angular.module('angularProjectApp')
  .config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
