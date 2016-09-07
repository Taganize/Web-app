//http://popcornjs.org/popcorn-docs/plugins/
//https://vimeo.com/49204148
//https://drive.google.com/drive/u/0/folders/0B9udTiYnlkOVSGJLWEZFU2NlczA
//http://onlybecausewecan.com

var app = angular.module('joinly', ['ngRoute', 'firebase']);

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
    .when('/dashboard', {
        templateUrl: 'templates/dashboard.html',
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
            $location.path('/dashboard');
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
      templateUrl: "#/product-tag.html",
      controller: function() {
        //submit to add tag
      },
      controllerAs: "tag"
    };
  });


app.controller('signupCtrl', function($scope) {

});



app.controller('tagsCtrl', function($scope) {
  //containing tags
  $scope.tagsFromDatabase = all_tags

  var Ref = firebase.database().ref('/dashboard');
  Ref.on('value', function(snapshot) {
    //alert(snapshot.val());
  });

});



app.controller('designCtrl', function($scope) {

});


var all_tags = [
  {
    "index": 0,
    "age": 23,
    "name": "Alyssa Stephens",
    "gender": "female",
    "company": "BUZZWORKS",
    "email": "alyssastephens@buzzworks.com",
    "phone": "+1 (860) 411-2196"
  },
  {
    "index": 1,
    "age": 37,
    "name": "Sallie Pate",
    "gender": "female",
    "company": "KINDALOO",
    "email": "salliepate@kindaloo.com",
    "phone": "+1 (994) 591-2888"
  },
  {
    "index": 2,
    "age": 22,
    "name": "Queen Mason",
    "gender": "female",
    "company": "GINKLE",
    "email": "queenmason@ginkle.com",
    "phone": "+1 (880) 468-3872"
  },
  {
    "index": 3,
    "age": 21,
    "name": "Lucile Bradley",
    "gender": "female",
    "company": "PAPRICUT",
    "email": "lucilebradley@papricut.com",
    "phone": "+1 (818) 505-2930"
  },
  {
    "index": 4,
    "age": 26,
    "name": "Stuart Lynch",
    "gender": "male",
    "company": "SYBIXTEX",
    "email": "stuartlynch@sybixtex.com",
    "phone": "+1 (861) 462-3630"
  },
  {
    "index": 5,
    "age": 33,
    "name": "Lambert Gilmore",
    "gender": "male",
    "company": "ENTALITY",
    "email": "lambertgilmore@entality.com",
    "phone": "+1 (955) 487-3117"
  }
]
