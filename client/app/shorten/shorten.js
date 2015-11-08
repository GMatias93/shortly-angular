angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    // data: []
    // url : 'http://www.google.com'
  };

  // $scope.urlInput

  $scope.addLink = function(){
    Links.addLink($scope.input)
      .then(function(){
        $location.path('/');
      })
      .catch(function(error){
        console.error(error);
      })
  };
        // return data;
        // console.log('4444444444444', data);
        // $scope.link.data.push(data);
        //something


});
