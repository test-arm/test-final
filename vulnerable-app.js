// 🚨 1. Dependabot Alert: Using known vulnerable version of lodash
const _ = require('lodash'); // Assume package.json uses lodash@4.17.15

// 🚨 2. Secret Scanning Alert: Hardcoded AWS credentials
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Express app with SQL Injection vulnerability
const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vulnerable_app'
});

// 🚨 3. Code Scanning Alert: SQL injection vulnerability
app.get('/user', (req, res) => {
  const username = req.query.username; // ❌ Not sanitized
  const query = `SELECT * FROM users WHERE username = '${username}'`; // 🛑 SQL Injection
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
