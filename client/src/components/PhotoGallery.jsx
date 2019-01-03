import React from 'react';
import axios from 'axios';
import ImageList from './imageList.jsx';
import Splash from './Splash.jsx';
import PhotoModal from './modals/PhotoModal.jsx';
import style from '../../styles.css';

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      listingId: '1',
      imageUrls: [],
      rooms: [],
      show: false,
      displayStyle: style.staticStyle
    }
  }

  handleClose() {
    this.setState({ show: false, displayStyle: style.staticStyle});
  };

  handleOpen() {
    this.setState({ show: true, displayStyle: style.staticNoStyle });
  };

  componentDidMount() {
    axios.get(`/photos/${this.state.listingId}`)
      .then((results) => {
        console.log('AXIOS SUCCESS');
        console.log('AXIOS RESULTS:   ', results);
        let imageUrls = results.data[0].roomImages;
        let rooms = results.data[0].rooms;
        this.setState({imageUrls, rooms});
      })
      .catch((err) => {
        console.log('AXIOS FAILURE');
        console.log('AXIOS ERROR:   ', err);
      });
  };

  render() {
    return (
      <div>
        <div style={this.state.displayStyle}>
          <div style={style.splashStyle} className='splash'>
            <Splash
            imageUrls={this.state.imageUrls}/>
          </div>
          <div className='room_images_list'>
            <ImageList
            rooms={this.state.rooms} 
            imageUrls={this.state.imageUrls}
            />
          </div>
        </div>
        <div className='photos_modal'>
          <PhotoModal 
          show={this.state.show}
          displayStyle={this.state.displayStyle} 
          handleClose={() => this.handleClose()} 
          handleOpen={() => this.handleOpen()} 
          rooms={this.state.rooms} 
          imageUrls={this.state.imageUrls}/>
        </div>
      </div>
    )
  }
};
