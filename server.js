const express = require('express');
const bodyParser = require('body-parser');

const knex = require('knex');
const sqlite = require('sqlite3');

const server = express();

server.use(bodyParser.json);

// server waiting on port 3000
const port = 3000;
server.listen(port, function() {
  console.log(`Server Listening on ${port}`);
});
