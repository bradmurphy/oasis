'use strict';

// app
var app = require('./app');

// router
app.config(['$routeProvider',
    function($routeProvider) {

      $routeProvider

      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .when('/etiquette', {
        templateUrl: 'views/etiquette.html',
        controller: 'EtiquetteCtrl'
      })

      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FAQCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    }]);
