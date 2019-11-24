var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var autoprefixer  = require('express-autoprefixer');

var routes = require('./routes');

var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set('views', path.join(__dirname, 'views'));
var exphbs  = require('express-handlebars');
var hbs = exphbs.create({
  extname: '.hbs',
  partialsDir: __dirname + '/views/partials',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'scss/'),
  dest: path.join(__dirname, 'public/'),
  debug: true,
  sourceMap: true
}));
app.use(autoprefixer({ browsers: 'last 2 versions' }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3003);