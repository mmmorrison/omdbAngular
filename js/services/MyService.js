app.service('MyService', ['$http', function($http) {
  return {
    getter: function(search) {
       return $http.get("http://www.omdbapi.com/?s=" + search);
    }
  }
}]);
