'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('View2Ctrl', ['$scope', 'myService', function($scope, myService) {
	$scope.user = myService.get();
}]);