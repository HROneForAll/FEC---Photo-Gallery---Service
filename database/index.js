const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.connect('mongodb://localhost/roomimages');
var db = mongoose.connection;

const room_image_schema = mongoose.Schema({
  roomId: String,
  rooms: [{
    room: String
  }]
});

let RoomImages = mongoose.model('RoomImages', room_image_schema);

let getRooms = (id) => {
  return new Promise ((resolve, reject) => {
    RoomImages.find({roomId: id}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports = {
  getRooms
};





