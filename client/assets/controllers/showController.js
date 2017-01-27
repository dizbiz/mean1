console.log('SHOW CONTROLLER');
app.controller('showController', ['$scope','apptFactory', '$location','$routeParams', function($scope, apptFactory, $location, $routeParams) {
$scope.appt = {};
      /*
        GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
        so we didn't set a variable so we could reuse it -
        we just run the friendsFactory method directly.
      */
    apptFactory.show($routeParams.id, function(returnedData){
      $scope.appt = returnedData;
      console.log($scope.appt);
    });




}]);