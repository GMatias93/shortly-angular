angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks($scope.data)
      .then(function(data){
        $scope.data.links = data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();

});
