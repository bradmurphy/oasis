'use strict';

// app
var app = require('./app');

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
