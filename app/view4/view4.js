'use strict';

angular.module('myApp.view4', ['ngRoute'])

.controller('View4Ctrl', ['$scope', 'myService', function($scope, myService) {
	$scope.user = myService.get();
}]);