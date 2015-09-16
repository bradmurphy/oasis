'use strict';

// app
var app = require('../app');

// home controller
app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.message = 'Everyone come and see how good I look!';

}]);
