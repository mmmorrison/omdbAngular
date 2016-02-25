 app.controller('MainController',['$scope', 'myservice', '$http', function ($scope, myservice, $http) {
   $scope.myservice = myservice;

   $scope.hitAPI = function(){
      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
      .then(function(data){
        $scope.payload = data.data.Search;
      })
    }
}]);

app.service('myservice', function() {
  this.movieInfo = "yyy";
});
