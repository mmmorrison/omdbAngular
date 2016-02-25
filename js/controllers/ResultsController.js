app.controller('ResultsController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService){
  movieTitle = $routeParams.movieTitle;

    MyService.getter(movieTitle).then(function (data) {
      $scope.movies = data.data.Search;
      console.log($scope.movies);
    })
}])
