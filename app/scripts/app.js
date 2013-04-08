'use strict';

angular.module('yeomanAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/addition', {
        templateUrl: 'views/addition.html',
        controller: 'AdditionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
