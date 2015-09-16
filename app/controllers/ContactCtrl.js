'use strict';

// app
var app = require('../app');

// contact controller
app.controller('ContactCtrl', ['$scope', function($scope) {

  $scope.message = 'Contact us! JK. This is just a demo.';

}]);
