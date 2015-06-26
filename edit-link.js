redditApp.controller('EditLinkCtrl', function($scope, $location, linkService, $routeParams){
  $scope.editLink = linkService.readLink($routeParams.id);
  $scope.saveLinkAndRedirect = function() {
    linkService.saveEdit($scope.editLink, $routeParams.id);
    console.log(linkService.links);
    $location.path("/");
  };
});
