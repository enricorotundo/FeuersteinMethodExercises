'use strict';

angular.module('myApp.view5', ['ngRoute'])

.controller('View5Ctrl', ['$scope', 'myService', '$location', function($scope, myService, $location) {
	$scope.results = { 'ex1': "", 'ex2': "", 'ex3': "" }

	// mockup
	var user = {
	  "inputs": {
	    "hyp2": true,
	    "name": "TommieK",
	    "age": "23",
	    "gender": "male",
	    "hyp1": true
	  },
	  "ex1": {
	    "step1": "1",
	    "step2": "2",
	    "step3": "3",
	    "step4": "1",
	    "step5": "2",
	    "step6": "3",
	    "step7": "1",
	    "step8": "2",
	    "step9": "3",
	    "step10": "1"
	  },
	  "ex2": {
	    "step1": "123456789",
	    "step2": "123456789",
	    "step3": "987654321"
	  },
	  "ex3": {
	    "step1": "ABCDEF",
	    "step2": "ABCDEF",
	    "step3": "ABCDE",
	    "step4": "ABCDE",
	    "step5": "ABCDE",
	    "step6": "ABCDEF"
	  }
	}
	// $scope.user = user; 
	$scope.user = myService.get();

	// ----- NOTE -----
	// the following analyse functions
	// implement the rules fo the "verify" 
	// step of the inference model

	$scope.analyse_ex1 = function() {
		var correct_solution = [1,2,3,1,2,3,1,2,3,1]
		var scores = []

		for (var i = 0; i < correct_solution.length; i++) { 
			console.log("index:" + i)
			console.log("correct_solution[i]:" + correct_solution[i])
			console.log("user solution: " + $scope.user.ex1[String('step'+String(i+1))])
    		
    		if (correct_solution[i] == $scope.user.ex1[String('step'+String(i+1))]) {
    			scores.push(1/correct_solution.length)
    		} else {
    			scores.push(0)
    		}
		}

		console.log(scores)
		var sum = scores.reduce(function(pv, cv) { return pv + cv; }, 0);		
		if (sum > 0.999999) {
			return 1
		} else{
			return sum
		};
	};


	$scope.analyse_ex2 = function() {
		if ($scope.user.ex2['step1'] === "123456789" &&
			$scope.user.ex2['step2'] === "123456789" &&
				$scope.user.ex2['step3'] === "987654321") {
			return 1
		} else {
			return 0
		};
	};

	$scope.analyse_ex3 = function() {
		var solutions = [
		"BCAED",
		"DBCAE",
		"CEBAD",
		"AECBD",
		"CBEAD",
		"EDBAC"
		]
		var scores = []

		for (var i = 0; i < solutions.length; i++) { 
			console.log("index:" + i)
			console.log("solutions[i]:" + solutions[i])
			console.log("user solution: " + $scope.user.ex3[String('step'+String(i+1))])
    		
    		if (solutions[i] == $scope.user.ex3[String('step'+String(i+1))]) {
    			scores.push(1/solutions.length)
    		} else {
    			scores.push(0)
    		}
		}

		console.log("analyse_ex3:" + scores)
		var sum = scores.reduce(function(pv, cv) { return pv + cv; }, 0);		
		console.log("sum:" + sum)
		if (sum > 0.999999) {
			return 1
		} else{
			return sum
		};
	};
	
	var score_ex1 = $scope.analyse_ex1()	
	var score_ex2 = $scope.analyse_ex2()
	var score_ex3 = $scope.analyse_ex3()

	console.log("Score for ex1: "+score_ex1)
	console.log("Score for ex2: "+score_ex2)
	console.log("Score for ex3: "+score_ex3)


	// ----- NOTE -----
	// the following functions
	// implement the rules fo the "verify" 
	// step of the inference model


	$scope.verify = function(score1, score2, score3) {
		//Threshold are from ages 8-28, we assume from 28 no more increase is needed. The start threshold is at 0.4
		$scope.thresholdEx1 = [0.4, 0.43, 0.46, 0.49, 0.52, 0.55, 0.58, 0.61, 0.64, 0.67, 0.70, 0.73, 0.76, 0.79, 0.82, 0.85, 0.87, 0.90, 0.93, 0.96, 1];
		$scope.thresholdEx2 = [0.4, 0.43, 0.46, 0.49, 0.52, 0.55, 0.58, 0.61, 0.64, 0.67, 0.70, 0.73, 0.76, 0.79, 0.82, 0.85, 0.87, 0.90, 0.93, 0.96, 1];
		$scope.thresholdEx3 = [0.4, 0.43, 0.46, 0.49, 0.52, 0.55, 0.58, 0.61, 0.64, 0.67, 0.70, 0.73, 0.76, 0.79, 0.82, 0.85, 0.87, 0.90, 0.93, 0.96, 1];

		if (score1 > 0.8) {
			$scope.results['ex1'] = "Absent"
		} else{
			$scope.results['ex1'] = "Present"
		};

		if (score2 > 0.1) {
			$scope.results['ex2'] = "Absent"
		} else{
			$scope.results['ex2'] = "Present"
		};

		if (score3 > 0.6) {
			$scope.results['ex3'] = "Absent"
		} else{
			$scope.results['ex3'] = "Present"
		};
		
	};

	console.log($scope.verify(score_ex1,score_ex2,score_ex3))
}]);