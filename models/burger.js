var orm = require('../config/orm');

var burger = {
    allBurgers: function (cb) { 
      orm.selectAll('burgers',function (e) { 
          cb(e);
      });
    },
    addBurger: function (val,cb) { 
      orm.insertOne('burgers','burger_name','devoured',val,false,function (e) { 
        cb(e);
       });
     },
    updateBurger: function (val2,id,cb) {
      orm.update('burgers','devoured',val2,id,function (e) { 
        cb(e);
       })

      }

}

module.exports = burger;