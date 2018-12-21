const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index');

var app = express();

app.use(express.static('public'));
app.use(morgan('short'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/photos/:roomId', (req, res) => {
  console.log('req.params.id: ', req.params.listingId);
  db.getRooms(req.params.listingId)
    .then((results) => {
      console.log('req.params.id: ', req.params.listingId);
      console.log('GET RESULTS: ', results);
      res.end();
    })
    .catch((err) => {
      console.log('CAUGHT IN GET');
      console.log('GET ERROR: ', err);
      res.end();
    });
});

const PORT = 1234;
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

