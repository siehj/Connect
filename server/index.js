const express = require('express');

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
