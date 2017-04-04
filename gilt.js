const express = require('express');
const fs = require('fs');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/gilt', function(req, res){
	var windowWidth = req.query.width;
	var ratio;
	var imgWidth;
	var imgHeight;

	if (windowWidth >= 1690) {
		imgWidth = 1680;
		imgHeight = 550;
		ratio = 3.055;
	} else if (windowWidth >= 1546) {
		imgWidth = 1536;
		imgHeight = 695;
		ratio = 2.207;
	} else if (windowWidth >= 950) {
		imgWidth = 940;
		imgHeight = 280;
		ratio = 3.357;
	} else if (windowWidth >= 910) {
		imgWidth = 900;
		imgHeight = 459;
		ratio = 1.957;
	}

	var sales = JSON.parse(fs.readFileSync("sales.json"));
	var activeSales = [];

	sales.forEach(function(sale) {
		var begins_at = new Date(sale.lifetime.begins_at);
		var current_at = new Date("2016-09-27T17:09:07.000Z");
		var ends_at = new Date(sale.lifetime.ends_at);
		if (begins_at.getTime() <= current_at.getTime() &&
			 ends_at.getTime() >= current_at.getTime()) {
			var imgSRC = sale.images.url_template.toString();
			imgSRC = imgSRC.replace("{NAME}", "default");
			imgSRC = imgSRC.replace("{WIDTH}", imgWidth);
			imgSRC = imgSRC.replace("{RATIO}", ratio);

			var params = '{' +
					'"name":"'+sale.name+'",' +
					'"ends_at":"'+sale.lifetime.ends_at+'",' +
					'"url":"'+imgSRC+'",' +
					'"width":"'+imgWidth+'",'+
					'"height":"'+imgHeight+'"'+
				'}';
			activeSales.push(JSON.parse(params));
		}
	});

	res.send(activeSales);
});

app.listen('8081');

exports = module.exports = app;