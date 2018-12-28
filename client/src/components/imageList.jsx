import React from 'react';
import style from '../../styles.css.js';
import ImageListCol from './imageListCol.jsx';


var ImageList = (props) => {
  let roomRow = [];
  let roomRows = [];
  let cols = [];
  let urls = [];
  let allUrls = props.imageUrls;
  let rooms = props.rooms;
  let imgCount = 0;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    urls.push(allUrls[imgCount]);
    imgCount += room.numImages;
    if (roomRow.length === 4) {
      roomRows.push(roomRow);
      roomRow = [];
      roomRow.push(room);
    } else if (i === rooms.length - 1) {
      roomRow.push(room);
      roomRows.push(roomRow);
    } else {
      roomRow.push(room);
    }
  }

  for (let i = 0; i < 4; i++) {
    cols.push(<ImageListCol urls={urls} allUrls={allUrls} rooms={props.rooms} roomRows={roomRows} colIndex={i} key={i}/>);
  }

  return (
    <div>
      <div className='tour-title'>
        <span style={style.titleStyle}>
          <h1>Tour this house</h1>
        </span>
      </div>
      <div style={style.listTableStyle} className='tour_image_table'>
          {cols}
      </div>
      <div style={style.exploreButtonStyle}>
        <button className='explore-button'>
          Explore all {allUrls.length} photos
        </button>
      </div>
    </div>
  )
};
export default ImageList;


/////////////
///////////
////////////


  // return props.rooms.map(room => {
  //   console.log('room: ', props.rooms);
  //   if (checkInit === false) {
  //     checkInit = true;
  //     i += 1;
  //     let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //     let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //     let url = props.imageUrls[roomImgCount];
  //     roomImgCount += room.numImages;

  //     return (
  //       <div>
  //         <div className='tour-title'>
  //            <span style={style.titleStyle}>
  //              <h1>Tour this house</h1>
  //           </span>
  //         </div>
  //         <table className='tour_image_table'>
  //             <imageListRow rooms={props.rooms}/>
  //         </table>
  //       </div>
  //       // <div>
  //       //   <div className='tour-title'>
  //       //     <span style={style.titleStyle}>
  //       //       <h1>Tour this house</h1>
  //       //     </span>
  //       //   </div>
  //       //     <table style={style.listTableStyle}>
  //       //       <tr className='home-explore-photos' id='room-img-list'>                
  //       //           <img style={style.listImageStyle} src={url}></img>
  //       //       </tr>
  //       //       <tr className='room-title'>
  //       //         <td>{roomName}</td>
  //       //       </tr>
  //       //     </table>
  //       // </div>
  //     )
  //   } else {
  //     currentRoomIndex += 1;
  //     let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //     let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //     let url = props.imageUrls[roomImgCount]
  //     roomImgCount += room.numImages;
  //     i += 1;
  //     return (
  //         <table style={style.listTableStyle}>
  //           <tr className='home-explore-photos' id='room-img-list'>           
  //               <img style={style.listImageStyle} src={url}></img>
  //           </tr>
  //           <span className='room-title'>
  //             <td>{roomName}</td>
  //           </span>
  //         </table>
  //     )
  //   }
  // });


  // var ImageList = (props) => {
  //   let currentRoomIndex = 0
  //   console.log('room: ', props.rooms);
  //   let roomImgCount = 0;
  //   let i = 0;
  //   let checkInit = false;
  
  //   return props.rooms.map(room => {
  //     console.log('room: ', props.rooms);
  //     if (checkInit === false) {
  //       checkInit = true;
  //       i += 1;
  //       let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //       let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //       let url = props.imageUrls[roomImgCount];
  //       roomImgCount += room.numImages;
  
  //       return (
  //         <div>
  //           <div className='tour-title'>
  //             <span style={style.titleStyle}>
  //               <h1>Tour this house</h1>
  //             </span>
  //           </div>
  //             <table style={style.listTableStyle}>
  //               <tr className='home-explore-photos' id='room-img-list'>                
  //                   <img style={style.listImageStyle} src={url}></img>
  //               </tr>
  //               <tr className='room-title'>
  //                 <td>{roomName}</td>
  //               </tr>
  //             </table>
  //         </div>
  //       )
  //     } else {
  //       currentRoomIndex += 1;
  //       let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //       let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //       let url = props.imageUrls[roomImgCount]
  //       roomImgCount += room.numImages;
  //       i += 1;
  //       return (
  //           <table style={style.listTableStyle}>
  //             <tr className='home-explore-photos' id='room-img-list'>           
  //                 <img style={style.listImageStyle} src={url}></img>
  //             </tr>
  //             <span className='room-title'>
  //               <td>{roomName}</td>
  //             </span>
  //           </table>
  //       )
  //     }
  //   });

  // return props.rooms.map(room => {
  //   console.log('room: ', props.rooms);
  //   if (checkInit === false) {
  //     checkInit = true;
  //     i += 1;
  //     let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //     let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //     let url = props.imageUrls[roomImgCount];
  //     roomImgCount += room.numImages;

  //     return (
  //       <div style={style.listStyle}>
  //         <table style={style.listStyle}>
  //           <tr className='room-title'>
  //             <th >{roomName}</th>
  //           </tr>
  //           <td style={style.listImageStyle} className='home-explore-photos' id='room-images-list'>                
  //               <img style={style.listImageStyle} src={url}></img>
  //           </td>
  //         </table>
  //       </div>
  //     )
  //   } else {
  //     currentRoomIndex += 1;
  //     let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //     let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //     let url = props.imageUrls[roomImgCount]
  //     roomImgCount += room.numImages;
  //     i += 1;
  //     return (
  //       <div style={style.listStyle}>
  //         <table style={style.listStyle}>
  //           <tr className='room-title'>
  //             <th>{roomName}</th>
  //           </tr>
  //           <td style={style.listImageStyle} className='home-explore-photos' id='room-images-list'>                
  //               <img style={style.listImageStyle} src={url} key={i}></img>
  //           </td>
  //         </table>
  //       </div>
  //     )
  //   }
  // })


  // return props.imageUrls.map(url => {
  //   let room = props.rooms[currentRoomIndex];
  //   console.log('room: ', props.rooms);
  //   if (checkInit === false) {
  //     checkInit = true;
  //     roomImgCount += 1;
  //     i += 1;
  //     let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //     let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);


  //     return (
  //       <div style={style.listStyle}>
  //         <table>
  //           <tr className='room-title'>
  //             <th >{roomName}</th>
  //           </tr>
  //           {/* <tr style={style.listStyle} className='home-explore-photos' id='room-images-list'> */}
  //             {/* <td>                
  //               <img style={style.listImageStyle} src={url}></img>
  //             </td>  
  //           </tr> */}
  //           <td style={style.listStyle} className='home-explore-photos' id='room-images-list'>                
  //               <img style={style.listImageStyle} src={url}></img>
  //           </td>
  //         </table>
  //       </div>
  //     )
  //   } else if (roomImgCount >= room.numImages) {
  //     currentRoomIndex += 1;
  //     room = props.rooms[currentRoomIndex];
  //     roomImgCount = 1;
  //     let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
  //     let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
  //     i += 1;
  //     return (
  //       <div style={style.listStyle}>
  //         <table>
  //           <tr className='room-title'>
  //             <th>{roomName}</th>
  //           </tr>
  //           {/* <tr style={style.listStyle} className='home-explore-photos' id='room-images-list'>
  //             <td>                
  //               <img style={style.listImageStyle} src={url}></img>
  //             </td>  
  //           </tr> */}
  //           <td style={style.listStyle} className='home-explore-photos' id='room-images-list'>                
  //               <img style={style.listImageStyle} src={url} key={i}></img>
  //           </td>
  //         </table>
  //       </div>
  //     )
  //   } else {
  //     roomImgCount += 1;
  //     i+= 1;
  //     console.log('SingleUrl: ', url);
  //     return ( 
  //     <div style={style.listStyle}>
  //       {/* <table> */}
  //         {/* <tr style={style.listStyle} className='home-explore-photos' id='room-images-list'>   */}
  //           <td style={style.listStyle} className='home-explore-photos' id='room-images-list' key={i}>                
  //               <img style={style.listImageStyle} src={url}></img>
  //           </td>
  //         {/* </tr> */}
  //       {/* </table> */}
  //     </div>
  //     )
  //   }
  // })
