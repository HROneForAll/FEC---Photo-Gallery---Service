import React from 'react';
import style from '../../styles.css.js';
import ImageListCol from './imageListCol.jsx';


var ImageList = (props) => {
  let roomRow = [];
  let roomRows = [];
  let cols = [];
  let urls = [];
  let allUrls = props.imageUrls;
  console.log(allUrls);
  let rooms = props.rooms;
  let imgCount = 0;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    urls.push(allUrls[imgCount]);
    imgCount += room.numImages;
    if (roomRow.length === 4) {
      roomRows.push(roomRow);
      roomRow = [];
      roomRow.push(room);
    } else if (i === rooms.length - 1) {
      roomRow.push(room);
      roomRows.push(roomRow);
    } else {
      roomRow.push(room);
    }
  }

  for (let i = 0; i < 4; i++) {
    cols.push(<ImageListCol urls={urls} allUrls={allUrls} rooms={props.rooms} roomRows={roomRows} colIndex={i} key={i}/>);
  }

  return (
    
    <div style={style.staticGalleryStyle} className='static-gallery'>
      <div className='tour-title'>
        <div style={style.titleStyle}>
          <h1>Tour this house</h1>
        </div>
      </div>
      <div style={style.listTableStyle} className='tour_image_table'>
          {cols}
      </div>
    </div>
  )
};
export default ImageList;