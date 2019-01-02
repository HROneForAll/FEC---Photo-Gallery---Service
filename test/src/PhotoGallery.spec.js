import React from 'react';
import { mount, shallow, render } from 'enzyme';
import PhotoGallery from '../../client/src/components/PhotoGallery.jsx';
import ImageList from '../../client/src/components/imageList.jsx';
import ImageListCol from '../../client/src/components/imageListCol.jsx';
import ImageListEntry from '../../client/src/components/imageListEntry.jsx';
import Splash from '../../client/src/components/Splash.jsx';
import PhotoModal from '../../client/src/components/modals/PhotoModal.jsx';
import TourRoomsModal from '../../client/src/components/modals/tourRoomsModal.jsx';
import ViewRoomsModal from '../../client/src/components/modals/viewRoomsModal.jsx';




describe('PhotoGallery', () => {
  it('should render correctly', () => {
    const component = shallow(<PhotoGallery />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('ImageList', () => {
  it('should render correctly with data', () => {
    const component = shallow(<ImageList 
      rooms={
        [
          {name: "bedroom_1_", numImages: 3},
          {name: "bedroom_2_", numImages: 4}
        ]
      }

      imageUrls={
        [
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_1.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_2.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_2_4.jpg"
        ]
      }
    />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly without data', () => {
    const component = shallow(<ImageList 
      rooms={[]}
      imageUrls={[]}
    />);

    expect(component).toMatchSnapshot();
  });

  it('should render four ImageListCol components', () => {
    const component = shallow(<ImageList 
      rooms={[]}
      imageUrls={[]}
    />);

    expect(component.find(ImageListCol)).toHaveLength(4);
  });

});

describe('ImageListCol', () => {
  it('should render correctly with data', () => {
    const component = shallow(<ImageListCol 
      roomRows={
        [
          [
            {name: "bedroom_1_", numImages: 3},
            {name: "bedroom_2_", numImages: 4}
          ],
          [
            {name: "bedroom_3_", numImages: 3},
            {name: "bedroom_4_", numImages: 4}
          ]
        ]
      }

      urls={
        [
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_1.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_2.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_2_4.jpg"
        ]
      }
      colIndex='0'
    />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly without data', () => {
    const component = shallow(<ImageListCol 
      roomRows={[]}
      urls={[]}
    />);

    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('ImageListEntry', () => {
  it('should render correctly with data', () => {
    const component = shallow(<ImageListEntry room={{name: "bedroom_1_", numImages: 3}}/>);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render correctly without data', () => {
  //   const component = shallow(<ImageListEntry room={{}}/>);
  
  //   expect(component).toMatchSnapshot();
  // });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('Splash', () => {
  it('should render correctly with data', () => {
    const component = shallow(<Splash 
      imageUrls={
        [
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_1.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_2.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_2_4.jpg"
        ]
      }
    />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('PhotoModal', () => {
  it('should render correctly with data', () => {
    let handleOpen = () => { console.log('handleOpen') };
    let handleClose = () => { console.log('handleClose') };

    const component = shallow(<PhotoModal 
      show={false}
      handleOpen={handleOpen}
      handleClose={handleClose}
      displayStyle={{display: 'none'}}
      rooms={
        [
          {name: "bedroom_1_", numImages: 3},
          {name: "bedroom_2_", numImages: 4}
        ]
      }

      imageUrls={
        [
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_1.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_2.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_2_4.jpg"
        ]
      }
    />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('TourRoomsModal', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TourRoomsModal 
      rooms={
        [
          {name: "bedroom_1_", numImages: 3},
          {name: "bedroom_2_", numImages: 4}
        ]
      }

      imageUrls={
        [
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_1.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_2.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_2_4.jpg"
        ]
      }
    />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<PhotoModal />).contains(<div className="">Bar</div>)).toBe(true);
  // });
});

describe('ViewRoomsModal', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ViewRoomsModal 
      rooms={
        [
          {name: "bedroom_1_", numImages: 3},
          {name: "bedroom_2_", numImages: 4}
        ]
      }

      imageUrls={
        [
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_1.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_1_2.jpg",
          "https://s3-us-west-1.amazonaws.com/fec-room-images/images/bedroom_2_4.jpg"
        ]
      }
    />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});