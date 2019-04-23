// we can find in the node_modules
var express = require('express');
// path is a system module so we do not need to install it seperately
var path = require('path');
var bodyParser = require('body-parser');

// index could be the home page
var index = require('./routes/index');
// the api that we want to create so we can work with mongodb
var tasks = require('./routes/tasks');

var port = 3000;

// creat main app
var app = express();

// Set up our View Engine
// let the system know what folder we want to use, here our views are in views folder
app.set('views', path.join(__dirname, 'views'));
// now we need to specify the engine
app.set('view engine', 'ejs');
// can render files with html extension
app.engine('html', require('ejs').renderFile);

// need a static folder to put all the angular stuff, here will go into client folder
// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Standard Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// create our route
// home page
app.use('/', index);
// tasks
app.use('/api', tasks);

// do the listen so we can run our server
// need to put in the port
// do call back function after connection
app.listen(port, function() {
    console.log('Server started on port ' + port);
});