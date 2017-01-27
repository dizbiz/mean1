
console.log('appts model');
var mongoose = require('mongoose');

//table template in db
var ApptSchema = new mongoose.Schema({
        date: Date,
        time: String,
        name: String,
        complaint: String

}, {timestamps: true})

var Appts = mongoose.model('Appts', ApptSchema)