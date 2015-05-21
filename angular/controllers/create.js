var app = angular.module('ports');
app.controller('create',['$scope','$http',function($scope,$http){
	$scope.addPoint = function(){
		var newPoint = {
			'x': '',
			'y': ''
		};
		$scope.port.position.push(newPoint);
	};

	$scope.removePoint = function(point){
		var points = $scope.port.position;
		var index = points.indexOf(point);
		if(index !== -1){
			points.splice(index,1);
		}
	};

	$scope.createPort = function(){
		$http.post('/db/ports/',{'info':$scope.port})
			.success(function(message){
				alert(message);
				$scope.$parent.getPorts(true);
			})
			.error(function(error){
				alert("Creation was not possible:" + error);
			});
	};

	$scope.port = {
		'name':'',
		'_id':'',
		'position':[],
		'maxWidth': '',
		'maxLength': ''
	};
}]);