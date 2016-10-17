var app = angular.module('proArch', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
        templateUrl : 'html/main.html'
    })
    .when('/projects', {
        templateUrl : 'html/projects.html'
    })
    .when('/projectTemplate/:name', {
        templateUrl : 'html/projectTemplate.html'
    })
    .when('/office', {
        templateUrl : 'html/office.html'
    })
    .when('/contact', {
        templateUrl : 'html/contact.html'
    })
    .otherwise({
        redirectTo: "main"
    });
}]);

app.controller('proArchCtrl',[ '$scope', function($scope){
    $scope.message = 'Contact us';
}]);

app.controller('projectsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.projectMessage = 'Szablon szczegolow projektu';
    $scope.projectTypeFilter = {};

    $http.get('projects/projects.json').then(function(response) {
        $scope.projectsList = response.data;
    });
}]);
