app.controller('loginController',['$scope','$location','userFactory',function($scope,$location,userFactory){

  $scope.login = function(user){
    userFactory.FindUser(user,function(result){
      console.log("Find User Function returns",result)
      if (result == null){
        // if user is not found then we create the user
        userFactory.Create(user,function(result1){
          console.log("create user",result1)
          $location.url('/appointments')
        })
      }else{
        console.log("the user is found with",result._id)
        $scope.current_user = result._id
        console.log($scope.current_user)
        $location.url('/appointments')
      }
    })
  }
}])
