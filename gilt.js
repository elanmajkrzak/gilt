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
	var activeSales = [];

	sales.forEach(function(sale) {
		var begins_at = new Date(sale.lifetime.begins_at);
		var current_at = new Date("2016-09-27T17:09:07.000Z");
		var ends_at = new Date(sale.lifetime.ends_at);
		if (begins_at.getTime() <= current_at.getTime() &&
			 ends_at.getTime() >= current_at.getTime()) {
			activeSales.push(sale);
		}
	});

  	console.log('recieved request');
	res.send(activeSales);
});

app.listen('8081');

exports = module.exports = app;