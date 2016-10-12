var app = angular.module('proArch', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
        templateUrl : 'html/main.html'
    })
    .when('/projects', {
        templateUrl : 'html/projects.html'
    })
    .when('/office', {
        templateUrl : 'html/office.html'
    })
    .when('/contact', {
        templateUrl : 'html/contact.html'
    });
}]);
app.controller('proArchCtrl',[ '$scope', '$route', function($scope, $route){
    $scope.message = 'Angular is pretty cool.';
}]);
