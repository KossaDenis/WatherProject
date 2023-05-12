const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'DENIS',
  database: 'WeatherBD'
});

app.get('/data', (req, res) => {
  const query = 'SELECT * FROM mytable';
  connection.query(query, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
