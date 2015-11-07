angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    url : 'http://www.google.com'
  };

  // $scope.urlInput

  $scope.addLink = function(){
    Links.addLink($scope.link)
      .then(function(data){
        console.log('4444444444444', data);
        // $scope.link.data = data;
        return data;

        //something
      })
      .catch(function(error){
        console.error(error);
      })
  };


});
