var app = angular.module('ports');
app.controller('read',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.port = $scope.$parent.portsHash[$routeParams.id];
}]);