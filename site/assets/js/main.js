//http://popcornjs.org/popcorn-docs/plugins/
//https://vimeo.com/49204148
//https://drive.google.com/drive/u/0/folders/0B9udTiYnlkOVSGJLWEZFU2NlczA
//http://onlybecausewecan.com

var app = angular.module('joinly', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    .otherwise({
    		redirectTo: '/'
    });
});

app.controller('homeCtrl', function($scope) {

});
