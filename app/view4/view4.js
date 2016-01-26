'use strict';

angular.module('myApp.view4', ['ngRoute'])

.controller('View4Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
	$scope.user = myService.get();
}]);