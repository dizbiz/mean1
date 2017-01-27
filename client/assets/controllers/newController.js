
app.controller('newController', ['$scope','apptFactory', '$location', function($scope, apptFactory, $location) {

    /*
      OUR $scope.create function goes here <-- $scope because we need to access this method
      with ng-submit or ng-click (from the form in the previous assignment).
      Want to all of the friends when we get back?  We can re-run index.
    */

    $scope.addAppt = function(){
        apptFactory.create($scope.newAppt, function(data){
            $location.url('/appointments')
            console.log(data);
        })
    } 
}]);