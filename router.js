var app = angular.module('spaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Forms', {
            templateUrl: 'Page-1.html',
            controller: 'page1Ctrl'
        })
        .when('/page2', {
            templateUrl: 'page4.html',
            controller: 'page4Ctrl'

        })
        .when('/page3', {
            templateUrl: 'page5.html',
            controller: 'page5Ctrl'
        })

    .when('/page4', {
        templateUrl: 'page6.html',
        controller: 'page6Ctrl'
    })

    .otherwise('/Forms');
});