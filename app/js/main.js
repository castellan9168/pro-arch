var app = angular.module('proArch', ['ngRoute']);
app.controller('proArchCtrl',[ '$scope', '$route', function($scope, $route){
    $scope.message = 'Angular is pretty cool.';
}]);
