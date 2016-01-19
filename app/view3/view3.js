'use strict';

angular.module('myApp.view3', ['ngRoute'])

.controller('View3Ctrl', ['$scope', 'myService', function($scope, myService) {
	$scope.user = myService.get();
}]);