'use strict';

angular.module('myApp.view4', ['ngRoute'])

.controller('View4Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
	$scope.user = myService.get();

	$scope.next = function() {
		myService.set($scope.user);
		$location.path('/view5');
	};

	$scope.back = function() {
		myService.set($scope.user);
		$location.path('/view3');
	};
}]);
