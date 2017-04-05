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
        var width = window.innerWidth;
        var ratio;
        var height;

        if (width >= 650) {
            width = 620;
            height = 280;
            ratio = 2.957;
        } else if (width >= 300) {
            width = 295;
            height = 202;
            ratio = 1.457;
        } else if (width >= 250) {
            width = 240;
            height = 163;
            ratio = 1.472;
        } else {
            width = 194;
            height = 123;
            ratio = 1.579;
        }

        url = url.replace("{NAME}", "default");
        url = url.replace("{WIDTH}", width);
        url = url.replace("{RATIO}", ratio);
        element.css({
            'background-image': 'url(' + url +')',
            'min-width': width+'px',
            'min-height': height+'px'
        });
    };
});