const express = require('express');
const morgan = require('morgan'); // used to show request log whenever a request appear
const path = require('path');
var methodOverride = require('method-override');
const handlebars = require('express-handlebars'); // used to create layout for web
require('dotenv').config()
//custom middleware
const route = require('./src/routes/routesControl');
const db = require('./src/config/db/index');

const app = express();
db.connect();

// using morgan for log display
app.use(morgan('combined'));

// set static directory for file search
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Template engine usage
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {},
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'public', 'views'));

// using middleware to convert input into object
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use(methodOverride('_method'));

// route controll initiate
route(app);

app.listen(5000, () => console.log('Listening at port 5000'));
