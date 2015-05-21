var app = angular.module('ports');
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: '/views/all.html',
        controller: 'all'
      }).
      when('/create', {
        templateUrl: '/views/create.html',
        controller: 'create'
      }).
      when('/:id/edit', {
        templateUrl: '/views/edit.html',
        controller: 'edit'
      }).
      when('/:id/read', {
        templateUrl: '/views/read.html',
        controller: 'read'
      });
}]);