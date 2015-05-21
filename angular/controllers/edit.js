var app = angular.module('ports');
app.controller('edit',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

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

	$scope.updatePort = function(){
		$http.put('/db/ports/' + $scope.port._id,{'info':$scope.port})
			.success(function(message){
				alert(message);
				$scope.$parent.getPorts(true);
			})
			.error(function(error){
				alert("Update was not possible:" + error);
			});
	};

	$scope.port = angular.copy($scope.$parent.portsHash[$routeParams.id]);
}]);