var app = angular.module('ports');
app.controller('main',['$scope','$http','$location',function($scope,$http,$location){

	$scope.createHash = function(){
		$scope.portsHash = {};
		var port,ports = $scope.ports;
		for(var i=0;i < ports.length;i++){
			port = ports[i];
			$scope.portsHash[port._id] = port;
		}
	};

	$scope.getPorts = function(reload){
		$http.get('/db/ports/')
			.success(function(records) {
				$scope.ports = records;
				$scope.createHash();
				if(reload){
					$scope.$broadcast('reloadAll');
					$location.path('/');
				}
			})
			.error(function(error){
				alert("Ports could not be retrieved:" + error);
			});
	};

	$scope.getPorts();
}]);