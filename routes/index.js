var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const db = "mongodb://vmurali:vmurali123@ds029979.mlab.com:29979/allusers"

/* GET home page. */
mongoose.set('useUnifiedTopology',true);
mongoose.set('useNewUrlParser',true)
router.get('/', function(req, res, next) {
  mongoose.connect(db,(err)=>{
    if(!err){
      console.log("DB Connected Successfully")
    }
  })
  res.render('index', { title: 'Express Is checked' });
});

module.exports = router;
