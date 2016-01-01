angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  //send ajax get to '/api/links/'
  $scope.data = {};
  Links.getAll(function (data) {
    $scope.data.links = data;
    console.log('getAll in controller', $scope.data.links);
  });

});
