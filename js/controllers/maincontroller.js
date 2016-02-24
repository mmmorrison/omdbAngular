app.controller('MainController', function($scope, $http){
  $http.get('http://www.omdbapi.com/?s').then(function(data){
      $scope.stuff = data;
      $scope.test = 'WORKED!!!!!'
  });
});
