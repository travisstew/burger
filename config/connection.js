// mysql://b0edb8a497cc4a:da3c3646@us-cdbr-iron-east-05.cleardb.net/heroku_fedf47f604bb52d?reconnect=true

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: "b0edb8a497cc4a",
  password: 'da3c3646',
  database: 'heroku_fedf47f604bb52d'

});

connection.connect(function(err, res){
  if(err) throw err;
  console.log('connected to burgers_db schema');
  
});

module.exports = connection;

