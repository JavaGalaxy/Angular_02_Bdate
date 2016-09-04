var app = angular.module('bdayToDo', []);

app.controller('MainController', function($scope){

	$scope.visible = true;

	$scope.bdays = [];

	$scope.addNewBday = function() {
		$scope.bdays.push({name:$scope.bdayname, date:$scope.bdaydate});

		$scope.bdayname = '';
		$scope.bdaydate = '';
	}

	$scope.removeBday = function(item) {

		$scope.bdays.splice($scope.bdays.indexOf(item), 1)
	}
})