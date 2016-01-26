'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {

/*	$scope.returnSelectedTests = function() {
		var selectedTestsArray = [];
		if ($scope.user.hyp11 == true)
		{
			selectedTestsArray.add("hyp11")
		}
		if ($scope.user.hyp13 == true)
		{
			selectedTestsArray.add("hyp13")
		}
		if ($scope.user.hyp29 == true)
		{
			selectedTestsArray.add("hyp29")
		}
		//return selectedTestsArray;
		return "JOMAMA";
	};*/


    $scope.user = myService.get();

	//$scope.selectedTestsArray = [];
    
	$scope.start = function() {
		myService.set($scope.user);

		//$scope.selectedTestsArray = returnSelectedTests()
		//$scope.user.name = returnSelectedTests()

		$location.path('/view2');
	};
      

    }]);