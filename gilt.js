const express = require('express');
const fs = require('fs');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/gilt', function(req, res){

	var sales = JSON.parse(fs.readFileSync("sales.json"));

  	console.log('recieved request');
	res.send(sales);
});

app.listen('8081');

exports = module.exports = app;