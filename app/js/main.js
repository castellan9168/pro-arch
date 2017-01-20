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
    
}]);

app.controller('projectsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.projectTypeFilter = {};

    $http.get('projects/projects.json').then(function(response) {
        $scope.projectsList = response.data;
    });
}]);

app.controller('mapCtrl', ['$scope', '$window', function($scope, $window){
    var officeMarker = {lat: 52.075656, lng: 21.029483};

    $window.map = new google.maps.Map(document.getElementById('map'), {
        center: officeMarker,
        zoom: 15,
        mapTypeControl: false,
        styles: [
            {
                featureType: 'poi.business',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: officeMarker,
        map: map
    });
}]);

project.component('projectDetails', {
    templateUrl : 'html/projectTemplate.html',
    controller: ['$http', '$routeParams', '$scope',
        function projectDetailsController($http, $routeParams, $scope) {
            var self = this;

            $http.get('projects/' + $routeParams.id + '.json').then(function(response) {
                self.project = response.data;
                gallery = self.project.gallery;
                galleryColumnsSplit();
            });

            function galleryColumnsSplit() {
                $scope.firstColumn = gallery.slice(0, Math.ceil(gallery.length / 2));
                $scope.secondColumn = gallery.slice(Math.ceil(gallery.length / 2), gallery.length);
                console.log($scope.firstColumn, $scope.secondColumn);
            }
        }]
});
