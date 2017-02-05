const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
const routes = require('./server/routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use(express.static(__dirname + "/public"));

app.listen(port);

console.log("listening on " + port);
