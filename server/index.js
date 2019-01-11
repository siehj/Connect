const express = require('express');
var bodyParser = require('body-parser');
const router = require('./routes/index.js');

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
