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
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PhotoGallery />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<PhotoGallery />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('ImageList', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ImageList debug />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('ImageListCol', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ImageListCol debug />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('ImageListEntry', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ImageListEntry debug />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('Splash', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Splash debug />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('PhotoModal', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PhotoModal debug />);
  
    expect(component).toMatchSnapshot();
  });


  // it('should render without throwing an error', function() {
  //   const component = shallow(<PhotoGallery debug />);
  //   expect(component.find('.fade in modal')).to.have.lengthOf(0);
  //   expect(component.find(PhotoModal)).to.have.lengthOf(1);
  //   expect(component.find(PhotoModal).shallow().find('.modal-container')).to.have.lengthOf(1);
  //   // expect(shallow(<Photo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});

describe('TourRoomsModal', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TourRoomsModal debug />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<PhotoModal />).contains(<div className="">Bar</div>)).toBe(true);
  // });
});

describe('ViewRoomsModal', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ViewRoomsModal debug />);
  
    expect(component).toMatchSnapshot();
  });

  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });
});