var app = angular.module('AngularExampleApp', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html',
      controller: 'HomeController'
    })
    .when('/photos', {
      templateUrl: '/templates/photos.html',
      controller: 'PhotosController'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true)
}]);

app.controller('MainController', function ($scope) {

});

app.controller('HomeController', function ($scope) {

});

app.controller('PhotosController', function ($scope, $http) {
  $http.get('/data/photos.json')
    .success(function (data, status, headers, config) {
      var photos = data.photos;

      // TODO: Do something with photos...
    })
    .error(function (data, status, headers, config) {

    })
});

