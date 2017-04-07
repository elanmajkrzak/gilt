const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/gilt', function(req, res){

	var sales = JSON.parse(fs.readFileSync("sales.json"));
	var activeSales = [];

	sales.forEach(function(sale) {
		var begins_at = new Date(sale.lifetime.begins_at);
		var current_at = new Date("2016-09-27T17:09:07.000Z");
		var ends_at = new Date(sale.lifetime.ends_at);
        var width = 295;
        var ratio = 1.457;
		var url = sale.images.url_template;

        url = url.replace("{NAME}", "default");
        url = url.replace("{WIDTH}", width);
        url = url.replace("{RATIO}", ratio);

		if (begins_at.getTime() <= current_at.getTime() &&
			 ends_at.getTime() >= current_at.getTime()) {
			var params = '{' +
					'"name":"'+sale.name+'",' +
					'"ends_at":"'+sale.lifetime.ends_at+'",' +
					'"url":"'+url+'",' +
					'"ratios":"'+sale.images.available.default.ratios.toString() +'"' +
				'}';
			activeSales.push(JSON.parse(params));
		}
	});

	activeSales.sort(function(a,b) {
		var dateA = new Date(a.ends_at);
		var dateB = new Date(b.ends_at);
		return dateA - dateB;
	});

	res.send(activeSales);
});

app.listen('8081');

exports = module.exports = app;