// mysql://b0edb8a497cc4a:da3c3646@us-cdbr-iron-east-05.cleardb.net/heroku_fedf47f604bb52d?reconnect=true

var mysql = require('mysql');

var mysqlConfig = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: "b0edb8a497cc4a",
  password: 'da3c3646',
  database: 'heroku_fedf47f604bb52d'

};
var connection = mysql.createConnection(mysqlConfig);
handleDisconnect(connection);

function handleDisconnect(client) {
  client.on('error', function (error) {
    if (!error.fatal) return;
    if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

    console.error('> Re-connecting lost MySQL connection: ' + error.stack);

    // NOTE: This assignment is to a variable from an outer scope; this is extremely important
    // If this said `client =` it wouldn't do what you want. The assignment here is implicitly changed
    // to `global.mysqlClient =` in node.
     connection = mysql.createConnection(client.config);
    handleDisconnect(mysqlClient);
    connection.connect();
  });
};
module.exports = connection;

