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
router.put('/api/burger/:id',function (req,res) { 
    burger.updateBurger(req.body.ate,req.params.id,function (e) {
        res.json(e);
        res.end();
      })
 })




module.exports = router;