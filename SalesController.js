angular.module("gilt", [])
.controller('SalesController', ['$scope', '$http', function($scope,$http) {
    var width = window.innerWidth;
    var url = "http://localhost:8081/gilt?width=" + width;
    $http.get(url)
        .then(function(response) {
            $scope.sales = response.data;
        });
}])
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        var width = attrs.width;
        var height = attrs.height;
        element.css({
            'background-image': 'url(' + url +')',
            'width': width+'px',
            'height': height+'px'
        });
    };
});