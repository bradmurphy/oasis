'use strict';

// initialize app

var app = angular.module('oasisApp', ['ngRoute']);

// router

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $routeProvider

      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);

    }]);

// controllers

app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.message = 'Everyone come and see how good I look!';

}]);

app.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.message = 'Look! I am an about page.';

}]);

app.controller('ContactCtrl', ['$scope', function($scope) {

  $scope.message = 'Contact us! JK. This is just a demo.';

}]);
