'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'myService', function($scope, myService) {
    $scope.user = myService.get();
    
	$scope.start = function() {
		myService.set($scope.user);
	};
      

    }]);