const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/', express.static(path.join(__dirname, "public")));
app.use('/todos', require('./routes').route);


console.log("server running..")
app.listen(9999)