console.log('appts server controller');

var mongoose = require('mongoose');
var Appts = mongoose.model('Appts');


function ApptsController(){
  this.index = function(req,res){
    Appts.find({})
    .populate('_creator')
    .exec(function(err, appts){
        if(err){
            console.log("error")
        } else{
            res.json(appts);
        }
    })
  };
  this.create = function(req,res){
    var new_appt = new Appts({
        date: req.body.date,
        time: req.body.time,
        name: req.body.name,
      	complaint:req.body.complaint});
        new_appt.save(function(err){
            if(err){
                console.log(err);
                console.log('something went wrong..');
            }else{
                console.log('successfully add a new appt!')
                res.json(new_appt);
            }
        })
  };
  // this.update = function(req,res){
  //     Friends.findOne({_id:req.params.id}, function(err, friend){
  //         friend.first_name= req.body.first_name,
  //         friend.last_name= req.body.last_name,
  //         friend.birthday= req.body.birthday
  //         friend.save(function(err){
  //             console.log("updated.");
  //             res.json(friend);
  //         })
  //         console.log("hi")
  //       })
  // };
  this.delete = function(req,res){
      Appts.remove({_id: req.params.id}, function(err){ 
          res.json(err);
      })
  };
  this.show = function(req,res){
    Appts.findOne({_id: req.params.id}, function(err, friend){
        console.log(appt);
        res.json(appt);
    })
  };
}
module.exports = new ApptsController();