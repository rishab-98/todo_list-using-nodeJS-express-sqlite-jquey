const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, "public")));
app.use('/todos', require('./routes/tasks').route);


console.log("server running..")
app.listen(9999)