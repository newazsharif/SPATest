var myModule = angular.module('MyApp', ['ngRoute']);
myModule.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/Index', {
            templateUrl: 'Home',
            
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'Home/About',
            
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'Home/Contact',
            
        });
    $locationProvider.html5Mode(true).hashPrefix('!')
        
});
