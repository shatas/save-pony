const express = require("express");
const config = require('./config/config')();
const api = require('./routes/api');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api(config));

const port = 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
