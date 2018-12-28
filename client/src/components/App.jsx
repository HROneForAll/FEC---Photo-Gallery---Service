import React from 'react';
import ImageList from './imageList.jsx';
import Splash from './Splash.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: '1',
      imageUrls: [],
      rooms: []
    }
  }

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
      })
  }

  render() {
    return (
      <div>
        <div className='splash'>
          <Splash imageUrls={this.state.imageUrls}/>
        </div>
        <div className='room_images_list'>
          <ImageList rooms={this.state.rooms} imageUrls={this.state.imageUrls}/>
        </div>
      </div>
    )
  }
};
