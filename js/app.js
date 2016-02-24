var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/results', {
      templateUrl: 'partials/results.html',
      controller: 'resultsController'
    })
    .otherwise('/');
});
