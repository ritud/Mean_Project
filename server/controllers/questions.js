var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = {
  create: function(req, res) {
    console.log("SERVER => CREATE FUNCTION");
    var question = new Question({question:req.body.question,cans:req.body.cans,fans1:req.body.fans1,fans2:req.body.fans2});
    question.save(function(err) {
      if(err){
        console.log("something went wrong while saving data in Model");
      } else {
        Question.find({},function(err,questions){
          return res.json(questions);
        })
      }
    })
  },
  getrandom:function(req,res){
    console.log("CONTROLLER => GET METHOD");
    Question.find({},function(err,questions){
      return res.json(questions);
    })
  }
}
