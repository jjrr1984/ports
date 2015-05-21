var app = angular.module('ports');
app.controller('all',['$scope','$http',function($scope,$http){

	$scope.removePort = function(id){
		$http.delete('/db/ports/:id')
			.success(function(message) {
				alert(message);
				$scope.$parent.getPort(true);
			})
			.error(function(error){
				alert("Port could not be removed:" + error);
			});
	};

	$scope.ports = $scope.$parent.ports;
}]);