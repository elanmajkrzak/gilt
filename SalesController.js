angular.module("gilt", ['ngMaterial'])
.controller('SalesController', ['$scope', '$http', function($scope,$http) {
    var url = "http://localhost:8081/gilt";
    $http.get(url)
        .then(function(response) {
            $scope.sales = response.data;
        });
}])
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        var width = 295;
        var ratio = 1.457;
        var height = 202;

        url = url.replace("{NAME}", "default");
        url = url.replace("{WIDTH}", width);
        url = url.replace("{RATIO}", ratio);
        element.css({
            'background-image': 'url(' + url +')',
            'width': width+'px',
            'height': height+'px'
        });
    };
});