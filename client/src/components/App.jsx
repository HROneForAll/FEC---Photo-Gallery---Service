import React from 'react';
import ImageList from './imageList.jsx';
import Splash from './Splash.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: '17652897',
      allImages: []
    }
  }

  componentDidMount() {
    axios.get(`/photos/${this.state.listingId}`)
      .then((results) => {
        console.log('AXIOS SUCCESS');
        console.log('AXIOS RESULTS:   ', results);
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
          <Splash />
        </div>
        <div className='room_images_list'>
          <ImageList />
        </div>
      </div>
    )
  }
};