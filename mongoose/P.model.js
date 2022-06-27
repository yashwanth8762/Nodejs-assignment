var mongoose =require('mongoose');
var Schema= mongoose.Schema;
var Pract= new Schema({
    id: Number,
    name:String,
    age:Number
})
module.exports=mongoose.model('pratice',Pract);