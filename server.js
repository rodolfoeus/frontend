// app.js
const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
app.use(express.static(__dirname + '/src'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
  });


// Start the server on port 3000
app.listen(process.env.PORT || 5000);
console.log('Node server running on port 5000');