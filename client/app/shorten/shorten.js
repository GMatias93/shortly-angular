angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(){
    Links.addLink($scope.link)
      .then(function(data){
    console.log('4444444444444', data);
      $scope.link.data = data;

        //something
      })
      .catch(function(error){
        console.error(error);
      })
  };

  $scope.validURL = '';

});
