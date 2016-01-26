'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('View2Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
	$scope.user = myService.get();

	$scope.next = function() {
		myService.set($scope.user);
		$location.path('/view3');
	};

	$scope.back = function() {
		myService.set($scope.user);
		$location.path('/view2');
	};

}]);