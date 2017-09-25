var questions = require('../controllers/questions.js');
var users = require('../controllers/users.js');
module.exports = function(app) {

  app.get('/get_questions',function(req,res){
    console.log("ROUTES => GET ROUTE");
    questions.getrandom(req,res);
  })

  app.post('/new_question', function(req,res){
    console.log("In Routes");
    questions.create(req, res);
  })

  // app.post('/register', function(req,res){
  //   console.log("In Routes => REGISTER USER");
  //   users.create(req, res);
  // })

}
