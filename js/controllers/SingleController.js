app.controller('SingleController', function($scope, $http){

  $scope.hitAPI = function(){
    $http.get("http://www.omdbapi.com/?s=" + $scope.single)
    .then(function(data){
      $scope.payload = data.data.Search;
    })
  }
})
