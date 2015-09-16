'use strict';

// app
var app = require('../app');

// about controller
app.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.message = 'Look! I am an about page.';

}]);
