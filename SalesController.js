angular.module("gilt", ['ngMaterial'])
.controller('SalesController', ['$scope', '$http', function($scope,$http) {
    var url = "http://localhost:8081/gilt";
    $http.get(url)
        .then(function(response) {
            $scope.sales = response.data;
        });
}]);