// var mongoose = require('mongoose');
// var Quser = mongoose.model('Quser');
// module.exports = {
//   create: function(req, res) {
//     console.log("SERVER => CREATE FUNCTION");
//     var question = new Quser({});
//     question.save(function(err) {
//       if(err){
//         console.log("something went wrong while saving data in Model");
//       } else {
//         Question.find({},function(err,questions){
//           return res.json(questions);
//         })
//       }
//     })
//   },
//   getrandom:function(req,res){
//     console.log("CONTROLLER => GET METHOD");
//     Question.find({},function(err,questions){
//       return res.json(questions);
//     })
//   }
// }
