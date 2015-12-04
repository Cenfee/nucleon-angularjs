/**
 * Created by Administrator on 2015/11/27.
 */

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        // route for the about page


        .when('/home', {
            templateUrl : 'asset/home/home.html',
            controller  : 'HomeController'
        })

        .when('/register', {
            templateUrl : 'asset/register/register.html',
            controller  : 'RegisterController'
        })

        .when('/login', {
            templateUrl : 'asset/login/login.html',
            controller  : 'LoginController'
        })

        .when('/class', {
            templateUrl : 'asset/class/class.html',
            controller  : 'ClassController'
        })

    // route for the contact page

});