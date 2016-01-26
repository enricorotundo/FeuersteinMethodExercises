'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
    $scope.user = myService.get();
    
	$scope.start = function() {
		myService.set($scope.user);
		$location.path('/view2');
	};
      

    }]);