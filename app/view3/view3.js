'use strict';

angular.module('myApp.view3', ['ngRoute'])

.controller('View3Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
	$scope.user = myService.get();
	
	$scope.user.ex2 = {}

	$scope.sequence_1 = ''
	$scope.sequence_2 = ''
	$scope.sequence_3 = ''

	$scope.next = function() {
		myService.set($scope.user);
		$location.path('/view4');
	};

	$scope.back = function() {
		myService.set($scope.user);
		$location.path('/view2');
	};


// 1st
	$scope.append_1 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '1'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button1'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_2 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '2'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button2'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_3 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '3'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button3'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_4 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '4'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button4'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_5 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '5'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button5'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_6 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '6'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button6'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_7 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '7'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button7'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_8 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '8'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button8'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};

	$scope.append_9 = function() {
		$scope.sequence_1 = $scope.sequence_1 + '9'
		console.log($scope.sequence_1)
		angular.element(document.getElementById('button9'))[0].disabled = true;
		$scope.user.ex2.step1 = $scope.sequence_1
	};




// 2nd

	$scope.append_11 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '1'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button11'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_22 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '2'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button22'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_33 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '3'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button33'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_44 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '4'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button44'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_55 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '5'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button55'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_66 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '6'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button66'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_77 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '7'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button77'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_88 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '8'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button88'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};

	$scope.append_99 = function() {
		$scope.sequence_2 = $scope.sequence_2 + '9'
		console.log($scope.sequence_2)
		angular.element(document.getElementById('button99'))[0].disabled = true;
		$scope.user.ex2.step2 = $scope.sequence_2
	};




// 3rd

	$scope.append_111 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '1'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button111'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_222 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '2'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button222'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_333 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '3'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button333'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_444 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '4'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button444'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_555 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '5'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button555'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_666 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '6'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button666'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_777 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '7'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button777'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_888 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '8'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button888'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};

	$scope.append_999 = function() {
		$scope.sequence_3 = $scope.sequence_3 + '9'
		console.log($scope.sequence_3)
		angular.element(document.getElementById('button999'))[0].disabled = true;
		$scope.user.ex2.step3 = $scope.sequence_3
	};
	
}]);