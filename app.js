const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/camps', function(req, res) {
	let camps = [
		{
			name: 'Outdoor',
			image:
				'https://images.pexels.com/photos/2898221/pexels-photo-2898221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			name: 'Near Trees',
			image:
				'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			name: 'Teepee',
			image:
				'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		}
	];
	res.render('camps', { camps: camps });
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('server listening');
});
