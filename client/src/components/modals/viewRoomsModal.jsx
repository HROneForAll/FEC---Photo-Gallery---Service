import React from 'react';
import {Grid, Row, Col, Label} from 'react-bootstrap';
import style from '../../../styles.css.js';

var ViewRoomsModal = (props) => {

  let imgCount = 0;
  let rooms = props.rooms
  let allUrls = props.imageUrls;


  return rooms.map(room => {
    let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
    let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
    let cols = [];

    for  (let i = imgCount; i < (imgCount + room.numImages); i++) {
      let url =  allUrls[i];
      cols.push(
        <Col xs={6} md={3}>
          <div>
            <img style={style.viewRoomsModalImageStyle} src={url} ></img>
          </div>
        </Col>
      )
    }
    
    imgCount += room.numImages;

    return (
      <Grid style={style.viewRoomsModalContentStyle}>
        <Row>
          {cols}
        </Row>
        <Label>{roomName}</Label>
      </Grid>
    )
  })
};

export default ViewRoomsModal;