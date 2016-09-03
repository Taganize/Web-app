//http://popcornjs.org/popcorn-docs/plugins/
//https://vimeo.com/49204148
//https://drive.google.com/drive/u/0/folders/0B9udTiYnlkOVSGJLWEZFU2NlczA
//http://onlybecausewecan.com

var app = angular.module('joinly', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })
    .when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
    })
    .when('/tags', {
        templateUrl: 'templates/tags.html',
        controller: 'tagsCtrl'
    })
    .when('/design', {
        templateUrl: 'templates/design.html',
        controller: 'designCtrl'
    })
    .otherwise({
    		redirectTo: '/'
    });


});

app.controller('loginCtrl', function($scope,$location) {
  $scope.login =function() {
    if ($scope.email && $scope.password) {
        var email = $scope.email;
        var password = $scope.password;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }).then(function(user){
          if (user) {
            $location.path('/tags');
          } else {
            alert("Error !");
          }
        });
    }
  }
});

app.directive("productTag", function() {
    return {
      restrict: 'E',
      templateUrl: "product-tag.html",
      controller: function() {
        
      },
      controllerAs: "tag"
    };
  });


app.controller('signupCtrl', function($scope) {

});
app.controller('tagsCtrl', function($scope) {

});
app.controller('designCtrl', function($scope) {

});
