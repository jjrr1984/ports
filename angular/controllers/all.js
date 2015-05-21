var app = angular.module('ports');
app.controller('all',['$scope','$http',function($scope,$http){

	$scope.removePort = function(id){
		$http.delete('/db/ports/' + id)
			.success(function(message) {
				alert(message);
				$scope.$parent.getPorts(true);
			})
			.error(function(error){
				alert("Port could not be removed:" + error);
			});
	};

	$scope.reload = function(){
		$scope.ports = $scope.$parent.ports;
	};

	$scope.$on('reloadAll',$scope.reload);

	$scope.reload();
}]);