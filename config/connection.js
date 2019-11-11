var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: '',
  database: 'burgers_db'

});

connection.connect(function(err, res){
  if(err) throw err;
  console.log('connected to burgers_db schema');
  
});

module.exports = connection;

