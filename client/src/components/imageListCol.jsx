import React from 'react'
import ImageListEntry from './imageListEntry.jsx';

var ImageListCol = (props) => {
  let rows = props.roomRows;
  let urls = props.urls;
  let cells = [];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let room = row[props.colIndex];
    let url = urls[props.colIndex];
    cells.push(<ImageListEntry url={url} room={room} key={'' + props.colIndex + i} />);
    urls = urls.slice(4);
  };

  return (
    <div className='tour_image_col'>
      {cells}
    </div>
  )

};

export default ImageListCol;