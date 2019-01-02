const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.connect('mongodb://localhost/roomimages', {useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('ERROR: ', err);
  } else {
    console.log('mongo suucessss');
  }
});

var db = mongoose.connection;

const roomImageSchema = mongoose.Schema({
  listingId: String,
  rooms: Array,
  roomImages: Array
});

let RoomImages = mongoose.model('RoomImages', roomImageSchema);

let rooms = [
  {name: 'bedroom_1_', numImages: 3},
  {name: 'bedroom_2_', numImages: 4},
  {name: 'bedroom_3_', numImages: 3},
  {name: 'bedroom_4_', numImages: 4},
  {name: 'bedroom_5_', numImages: 5},
  {name: 'dining_room_1_', numImages: 3},
  {name: 'dining_room_2_', numImages: 2},
  {name: 'entry_', numImages: 2},
  {name: 'exterior_', numImages: 1},
  {name: 'full_bathroom_1_', numImages: 1},
  {name: 'full_bathroom_2_', numImages: 2},
  {name: 'full_bathroom_3_', numImages: 2},
  {name: 'full_bathroom_4_', numImages: 1},
  {name: 'full_bathroom_5_', numImages: 2},
  {name: 'full_bathroom_6_', numImages: 5},
  {name: 'full_kitchen_', numImages: 5},
  {name: 'living_room_', numImages: 5},
  {name: 'outdoor_common_area_', numImages: 4},
  {name: 'outdoor_space_', numImages: 5},
  {name: 'study_', numImages: 2}
];

const baseURL = 'https://s3-us-west-1.amazonaws.com/fec-room-images/images/';

let seed = (id) => {
  let imageArr = [];
  let currentRoomIndex = 0;
  let currentRoom = rooms[currentRoomIndex];
  let currentRoomCount = 1;

  for (let i = 1; i <= 61; i++) {
    if (currentRoomCount > currentRoom.numImages) {
      currentRoomIndex += 1;
      currentRoom = rooms[currentRoomIndex];
      currentRoomCount = 1;
    }
    currentRoomCount += 1;
    imageArr.push(`https://s3-us-west-1.amazonaws.com/fec-room-images/images/${currentRoom.name}${i}.jpg`);
  }
  console.log('ImageArray: ', imageArr);
  RoomImages.create({listingId: id, rooms: rooms, roomImages: imageArr});
};
// seed('1');

let getImageUrls = (id) => {
  return new Promise ((resolve, reject) => {
    RoomImages.find({listingId: id}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.stringify(results));
      }
    });
  });
};

module.exports = {
  getImageUrls
};





