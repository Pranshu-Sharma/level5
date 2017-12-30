var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/hello", {
        templateUrl : "views/example.html"
    });

}]);
