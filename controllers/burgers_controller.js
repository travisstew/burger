var express = require('express');
var router = express.Router();
var burger = require('../models/burger');


router.get('/',function (req,res) {
    burger.allBurgers(function (e) {  
      res.render('index',{burger:e});
      });
  });

router.post('/api/burger',function (req,res) {
      
       
      burger.addBurger(req.body.burgerName,function (e) {
        });
        res.end();
});




module.exports = router;