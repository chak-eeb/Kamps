const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/db');




connectDB();

let camps = [
	{
		name: 'Outdoor',
		image:
			'https://images.pexels.com/photos/2898221/pexels-photo-2898221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	},
	{
		name: 'six tents in forest',
		image:
			'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	},

	{
		name: 'Teepee',
		image:
			'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	}
];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/camps', function(req, res) {
	res.render('camps', { camps: camps });
});

app.get('/camps/new', function(req, res) {
	res.render('new.ejs');
});

app.post('/camps', function(req, res) {
	//get the data
	let name = req.body.name;
	let image = req.body.image;
	let newCamp = { name: name, image: image };
	camps.push(newCamp);
	console.log(camps);
	//redirect back to camps page
	res.redirect('camps');
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('server listening');
});
