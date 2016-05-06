var app = angular.module("myApp", ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/:movieID/show', {
      templateUrl: 'omdbAngular/partials/single.html',
      controller: 'SingleController'
    })
    .when("/:movieTitle/results", {
      templateUrl: 'omdbAngular/partials/results.html',
      controller: 'ResultsController'
    })
    .otherwise('/');
});
