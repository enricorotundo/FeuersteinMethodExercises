'use strict';

angular.module('myApp.view5', ['ngRoute'])

.controller('View5Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
	$scope.user = myService.get();
}]);