app.controller('MainController', function($scope, $http){

  $scope.hitAPI = function(){
    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
    .then(function(data){
      $scope.payload = data.data.Search;
      
      console.log($scope.payload);
    })
  }
})
