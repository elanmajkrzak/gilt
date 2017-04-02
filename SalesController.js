angular.module("gilt", [])
.controller('SalesController', ['$scope', '$http', function($scope,$http) {
  $http.get("http://localhost:8081/gilt")
    .then(function(response) {
        $scope.sales = response.data;
    });
}])
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});