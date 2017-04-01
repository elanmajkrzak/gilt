angular.module("gilt", [])
.controller('SalesController', ['$scope', '$http', function($scope,$http) {
  $http.get("http://localhost:8081/gilt")
    .then(function(response) {
        $scope.sales = response.data;
        console.log($scope.sales)
    });
}]);