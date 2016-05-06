app.controller('SingleController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService){
  movieID = $routeParams.movieID;

    MyService.oneMovie(movieID).then(function(data) {
        $scope.movie = data.data;
      console.log($scope.movie.Poster);
    })
}])
