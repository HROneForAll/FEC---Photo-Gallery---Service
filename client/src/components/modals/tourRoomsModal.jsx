import React from 'react';
import { Grid, Row, Col, Label, Image } from 'react-bootstrap';
import style from '../../../styles.css.js';

var TourRoomsModal = (props) => {

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
        <Row xs={6} md={3}>
          <div>
            <Image onClick={() => props.handleImageOpen(url)} style={style.tourRoomsModalImageStyle} src={url} responsive/>
          </div>
        </Row>
      )
    }

    imgCount += room.numImages;

    return (
      <Grid>
        <Label id={roomName} style={style.tourRoomsModalLabelStyle} >{roomName}</Label>
        <Col style={style.tourRoomsModalContentStyle}>
          {cols}
        </Col>
      </Grid>
    )
  })
};

export default TourRoomsModal;