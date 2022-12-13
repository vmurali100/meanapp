var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const db = "mongodb+srv://vmurali:Pavani!2345@cluster0.plco6qd.mongodb.net/?retryWrites=true&w=majority"

/* GET home page. */
mongoose.set('useUnifiedTopology',true);
mongoose.set('useNewUrlParser',true)
router.get('/', function(req, res, next) {
  mongoose.connect(db,(err)=>{
    console.log(err)
    if(!err){
      console.log("DB Connected Successfully")
    }else{
      console.log(err)
    }
  })
  res.render('index', { title: 'Express Is checked..' });
});

module.exports = router;
