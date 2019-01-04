import React from 'react';
import style from '../../styles.css.js'

var ImageListEntry = (props) => {
  let room = props.room;
  let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  let url = props.url;

  return (
    <div className='tour-entry'>
      <div className='tour_image'>
        <img href={'#' + roomName} style={style.listImageStyle} src={url}></img>
        <div style={style.roomLabelStyle} className='room-label'>
          <span>{roomName}</span>
      </div>
      </div>
    </div>
  )
};

export default ImageListEntry;