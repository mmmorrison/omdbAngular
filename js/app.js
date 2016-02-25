var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/single', {
      templateUrl: 'partials/single.html',
      controller: 'SingleController'
    })
    .when("/results", {
      templateUrl: 'partials/results.html',
      controller: 'ResultsController'
    })
    .otherwise('/');
});
