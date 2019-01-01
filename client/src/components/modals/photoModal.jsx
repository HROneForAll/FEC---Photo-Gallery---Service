import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import style from '../../../styles.css';
import ViewRoomsModal from './viewRooms.jsx';
import { relative } from 'path';
import TourRoomsModal from './tourRooms.jsx';


export default class PhotoModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleViewOpen = this.handleViewOpen.bind(this);
    this.handleTourOpen = this.handleTourOpen.bind(this);
    
    this.state = {
      show: false,
      displayStyle: this.props.displayStyle,
      displayViewStyle: style.staticNoStyle,
      displayTourStyle: style.staticNoStyle,
      buttonStyle: style.buttonShowStyle,
      buttonContent: '',
      viewAllPage: false,
      tourRoomsPage: false
    };
  }

  handleClose() {
    this.props.handleClose()
    this.setState({ show: false, buttonStyle: style.buttonShowStyle });
  }

  handleTourOpen() {
    this.props.handleOpen()
    this.setState({ show: true, buttonStyle: style.buttonHideStyle, buttonContent:'View all rooms',  displayViewStyle: style.staticNoStyle, displayTourStyle: style.staticStyle, tourRoomsPage: true, viewAllPage: false })
  }

  handleViewOpen() {
    this.props.handleOpen()
    this.setState({ show: true, buttonStyle: style.buttonHideStyle, buttonContent:'Tour this home', displayViewStyle: style.staticStyle, displayTourStyle: style.staticNoStyle, tourRoomsPage: false, viewAllPage: true})
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
      <div className="modal-container">
        <Button 
          style={style.splashButtonStyle}
          onClick={() => this.handleTourOpen()}
          >
          TOUR THIS HOME
        </Button>
        <Button
          style={this.state.buttonStyle}
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.handleViewOpen()}
        >
          Explore all {this.props.imageUrls.length} photos
        </Button>

        <Modal
          style={style.viewRoomsModalStyle}
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
              <ViewRoomsModal rooms={this.props.rooms} imageUrls={this.props.imageUrls} />
            </div>
            <div style={this.state.displayTourStyle} className='tour-rooms-modal'>
              <TourRoomsModal rooms={this.props.rooms} imageUrls={this.props.imageUrls} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};

