app.factory('userFactory',['$http',function($http){
  function userFactory(){
    var _this = this;
    //
    // this.index = function(callback){
    //   $http.get('/orders').then(function(returned_data){
    //     orders = returned_data.data;
    //     callback(orders);
    //   });
    // };
    this.Create = function(user,callback){
      $http.post('/user',user).then(function(returned_data){
        console.log("returned_data:::::",returned_data.data);
        var user = returned_data.data;
        this.user = user
        callback(user)
      })
    }
    this.GetUser = function(){
      return (this.user);
    }
    this.FindUser = function(user,callback){
      $http.post('/finduser',user).then(function(returned_data){
        console.log("from factory",returned_data.data)
        this.user = returned_data.data
        callback(returned_data.data)
      })
    }
  }
  return new userFactory();
}])
