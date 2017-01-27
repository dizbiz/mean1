
console.log('routes');

//friends references the controller
var appts = require('../controllers/server_controller.js')
var users = require('../controllers/userController.js')

module.exports = function(app){
  app.post('/user', users.create);
  app.post('/finduser', users.find);
  app.get('/appointments', appts.index);
  // app.get('/appointments/:id', friends.show);
  app.post('/appointments', appts.create);
  // app.put('/friends/:id', friends.update);
  app.delete('/appointments/:id', appts.delete);
}
