app.controller('MainController', function($scope, $http){

  $scope.fetch = function(){
    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
    .then(function(data){
      $scope.payload = data;
      console.log($scope.payload);
    })
  }
})
