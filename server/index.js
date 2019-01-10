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

let photoGallerySeedCheck = false;

app.get('/photos/:listingId', (req, res) => {
  let seedCheck = photoGallerySeedCheck;
  if (!seedCheck) {
    photoGallerySeedCheck = true;
    db.seed(req.params.listingId)
      .then((cb) => {
        cb();
      })
      .catch((err) => {
        console.log('CAUGHT SEEDING IN GET:', err);
      })
  }
  db.getImageUrls(req.params.listingId)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.log('CAUGHT IN GET');
      console.log('GET ERROR: ', err);
      res.status(404).send(err);
    });
});

const PORT = 1234;
app.listen(PORT, () => {
  console.log(`Photo Gallery is listening on port: ${PORT}`);
});

