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
    $routeProvider.otherwise({
        redirectTo: "main"
    });
}]);
app.controller('proArchCtrl',[ '$scope', '$route', function($scope, $route){
    $scope.message = 'Contact us';
}]);
app.run(['$route', function($route) {
    $route.reload();
}]);
