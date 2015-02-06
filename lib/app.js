var express = require('express');

// Create the app.
var app = express();

// App settings.
app.set('view engine', 'ejs');

// App middleware.
app.use(express.static(__dirname + '/../public'));

// Routes
app.get('*', function (req, res) {
  if (req.originalUrl.match(/\.\w+$/)) {
    res.status(404);
    return;
  }

  res.render('index', {
    title: 'Angular Example'
  });
});

// Add any additional routes before this one...
var serverPort = process.env.PORT || 9292;
var server = app.listen(serverPort, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

