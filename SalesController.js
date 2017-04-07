angular.module("gilt", ['ngMaterial'])
.controller('SalesController', ['$scope', '$http', function($scope,$http) {
    var url = "http://127.0.0.1:8081/gilt";
    $http.get(url)
        .then(function(response) {
            $scope.sales = response.data;
        });
}]);