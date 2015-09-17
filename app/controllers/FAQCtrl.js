'use strict';

// app
var app = require('../app');

// faq controller
app.controller('FAQCtrl', ['$scope', function($scope) {

  $scope.message = 'Frequently asked questions?';

}]);
