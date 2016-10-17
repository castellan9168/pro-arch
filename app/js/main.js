var app = angular.module('proArch', ['ngRoute', 'projectDetails']);
var project = angular.module('projectDetails',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
        templateUrl : 'html/main.html'
    })
    .when('/projects', {
        templateUrl : 'html/projects.html'
    })
    .when('/projectTemplate/:id', {
        template : '<project-details></project-details>'
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
    $scope.projectTypeFilter = {};

    $http.get('projects/projects.json').then(function(response) {
        $scope.projectsList = response.data;
    });
}]);

project.component('projectDetails', {
    templateUrl : 'html/projectTemplate.html',
    controller: ['$http', '$routeParams',
        function projectDetailsController($http, $routeParams) {
            var self = this;
            $http.get('projects/' + $routeParams.id + '.json').then(function(response) {
                self.project = response.data;
            });
        }]
});
