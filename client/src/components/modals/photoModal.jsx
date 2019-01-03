import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import style from '../../../styles.css';
import ViewRoomsModal from './viewRoomsModal.jsx';
import TourRoomsModal from './tourRoomsModal.jsx';


export default class PhotoModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleViewOpen = this.handleViewOpen.bind(this);
    this.handleTourOpen = this.handleTourOpen.bind(this);
    
    this.state = {
      show: false,
      displayStyle: this.props.displayStyle,
      displayViewStyle: style.tourRoomsModalStyle,
      displayTourStyle: style.viewRoomsModalStyle,
      splashButtonStyle: style.splashButtonStyle,
      exploreButtonStyle: style.exploreButtonStyle,
      splashButtonAreaStyle: style.splashButtonAreaStyle, 
      exploreButtonAreaStyle: style.exploreButtonAreaStyle, 
      buttonContent: '',
      viewAllPage: false,
      tourRoomsPage: false
    };
  }

  handleClose() {
    this.props.handleClose()
    this.setState({ 
      show: false,
      buttonStyle: style.splashButtonAreaStyle,
      splashButtonStyle: style.splashButtonStyle,
      exploreButtonStyle: style.exploreButtonStyle,
      splashButtonAreaStyle: style.splashButtonAreaStyle, 
      exploreButtonAreaStyle: style.exploreButtonAreaStyle, 
      displayViewStyle: style.staticNoStyle, 
      displayTourStyle: style.staticNoStyle, 
      viewAllPage: false,
      tourRoomsPage: false
    });
  }

  handleTourOpen() {
    this.props.handleOpen()
    this.setState({ 
      show: true, 
      buttonStyle: style.staticNoStyle, 
      splashButtonStyle: style.buttonHideStyle, 
      splashButtonAreaStyle: style.buttonHideStyle, 
      exploreButtonStyle: style.buttonHideStyle, 
      exploreButtonAreaStyle: style.buttonHideStyle, 
      buttonContent:'View all rooms',  
      displayStyle: style.tourRoomsModalStyle,
      displayViewStyle: style.staticNoStyle, 
      displayTourStyle: style.tourRoomsModalStyle, 
      tourRoomsPage: true, 
      viewAllPage: false 
    });
  }

  handleViewOpen() {
    this.props.handleOpen()
    this.setState({ 
      show: true, 
      buttonStyle: style.staticNoStyle,
      splashButtonStyle: style.buttonHideStyle, 
      splashButtonAreaStyle: style.buttonHideStyle, 
      exploreButtonStyle: style.buttonHideStyle, 
      exploreButtonAreaStyle: style.buttonHideStyle, 
      buttonContent:'Tour this home', 
      displayStyle: style.viewRoomsModalStyle,
      displayViewStyle: style.viewRoomsModalStyle,
      displayTourStyle: style.staticNoStyle, 
      tourRoomsPage: false, 
      viewAllPage: true
    });
  }

  handleModalChange() {
    if (this.state.tourRoomsPage === false && this.state.viewAllPage === true) {
      this.handleTourOpen();
    } else if (this.state.tourRoomsPage === true && this.state.viewAllPage === false) {
      this.handleViewOpen();
    }
  }

  render() {
    return (
      <div className='modal-container'>
        <div className='tour-button' >
          <Button
            style={this.state.splashButtonAreaStyle}
            onClick={() => this.handleTourOpen()}
            >
          </Button>
          <div onClick={() => this.handleTourOpen()} style={this.state.splashButtonStyle}>
            <span> TOUR THIS HOME </span> 
          </div>
        </div>
        <div className='explore-button'>
          <Button
            style={this.state.exploreButtonStyle}
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.handleViewOpen()}
          >
            Explore all {this.props.imageUrls.length} photos
          </Button>
        </div>

        <Modal
          style={style.tourRoomsModalStyle}
          show={this.state.show}
          onHide={() => this.handleClose()}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header style={style.modalNavStyle}>
            <Modal.Title id="contained-modal-title">
              <div>
                <Button 
                style={style.backButtonStyle}
                onClick={() => this.handleClose()}>
                  <i class="fas fa-arrow-circle-left"></i>
                </Button>
                <Button 
                style={style.changeModalButtonStyle}
                onClick={() => this.handleModalChange()}
                >
                  {this.state.buttonContent}
                </Button>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={this.state.displayViewStyle} className='view-rooms-modal'>
              <ViewRoomsModal displayStyle={this.state.displayViewStyle} className='view-rooms-modal' rooms={this.props.rooms} imageUrls={this.props.imageUrls} />
            </div>
            <div style={this.state.displayTourStyle}className='tour-rooms-modal'>
              <TourRoomsModal displayStyle={this.state.displayTourStyle} rooms={this.props.rooms} imageUrls={this.props.imageUrls} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
};

