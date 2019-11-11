var connection = require('./connection');

var orm = {

  selectAll: function (table, cb) {
      var query = `SELECT * FROM ${table}`
      connection.query(query,function (err, res) {
        if(err) throw err;
            cb(res);
        });
    }
    ,
  insertOne: function(table,col,col2,val,val2,cb) { 
    var query = `INSERT INTO ${table} (${col}, ${col2}) VALUES('${val}',${val2})`;
    connection.query(query, function (err,res) {
        if(err) throw err;
        cb(res);
      })
   },

  update: function(table,col,value,col2,value2,id,cb) {
    var query = `UPDATE ${table} SET ${col} = ${value}, ${col2} = ${value2} WHERE  id=${id}`;
    connection.query(query,function (err,res) {
        if(err) throw err;
        cb(res);
    });
  }

}

module.exports = orm;

