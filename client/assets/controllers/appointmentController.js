app.controller('appointmentsController', ['$scope','apptFactory','$location', function($scope, apptFactory, $location) {
$scope.appts = []
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
var index = function(){
        apptFactory.index(function(returnedData){
                          $scope.appts = returnedData;
                          console.log($scope.appts);
                        });
            };
index();

$scope.removeAppt = function(id){
    apptFactory.delete(id, function(data){
        index();
        $location.url('/appointments')
    })
}

}]);