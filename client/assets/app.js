var app = angular.module("myApp", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider){ $routeProvider
    .when("/", {
        templateUrl: "partials/login.html",
        controller: 'loginController'
    })
    .when("/appointments/", {
        templateUrl: "partials/appointments.html",
        controller: 'appointmentsController'
    })
    .when("/appointments/new", {
        templateUrl: "partials/new.html",
        controller: 'newController'
    })
    .otherwise({
        redirectTo: "/"
    });
})
