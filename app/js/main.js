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

app.controller('proArchCtrl',[ '$scope', function($scope){
    $scope.message = 'Contact us';
}]);

app.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.projectTypeFilter = {};
    $scope.projectsList = [
        {
            basicData: {
                name: 'Project 1',
                location: 'Location 1',
            },
            year: 2010,
            status: 'Zrealizowany',
            type: 'singleFamily'
        },
        {
            basicData: {
                name: 'Project 2',
                location: 'Location 2',
            },
            year: 2011,
            status: 'W budowie',
            type: 'interior'
        },
        {
            basicData: {
                name: 'Project 3',
                location: 'Location 3',
            },
            year: 2011,
            status: 'W budowie',
            type: 'singleFamily'
        },
        {
            basicData: {
                name: 'Project 4',
                location: 'Location 4',
            },
            year: 2011,
            status: 'W budowie',
            type: 'multiFamily'
        },
        {
            basicData: {
                name: 'Project 5',
                location: 'Location 5',
            },
            year: 2011,
            status: 'W budowie',
            type: 'office'
        },
        {
            basicData: {
                name: 'Project 6',
                location: 'Location 6',
            },
            year: 2011,
            status: 'W budowie',
            type: 'publicBuilding'
        }
    ];
}]);
