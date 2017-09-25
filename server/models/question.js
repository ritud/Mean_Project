// require mongoose
var mongoose = require('mongoose');
// create the schema
var QuestionSchema = new mongoose.Schema({
  question: {type:String,required:true},
  cans:{type:String,required:true},
  fans1:{type:String,required:true},
  fans2:{type:String,required:true},
})
// register the schema as a model
var Question = mongoose.model('Question', QuestionSchema);
