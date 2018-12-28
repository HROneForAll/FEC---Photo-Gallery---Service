// import React from 'react';
// import style from '../../styles.css.js';
// import RoomTitle from './roomTitle.jsx';


// var ImageList = (props) => {
//   let currentRoomIndex = 0
//   console.log('room: ', props.rooms);
//   let roomImgCount = 0;
//   let i = 0;

//   let checkInit = false;

//   // let newRoomTitle = (room) => (
//   //   <div className='room-name'>
//   //     <h1> TEST </h1>
//   //   </div>
//   // );
//   // let room = props.rooms[currentRoomIndex];
//   return props.imageUrls.map(url => {
//     let room = props.rooms[currentRoomIndex];
//     console.log('room: ', props.rooms);
//     if (checkInit === false) {
//       checkInit = true;
//       roomImgCount += 1;
//       i += 1;
//       let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
//       let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);


//       return (
//         <div style={style.listStyle}>
//           <table>
//             <tr className='room-title'>
//               <th >{roomName}</th>
//             </tr>
//             {/* <tr style={style.listStyle} className='home-explore-photos' id='room-images-list'> */}
//               {/* <td>                
//                 <img style={style.listImageStyle} src={url}></img>
//               </td>  
//             </tr> */}
//             <td style={style.listStyle} className='home-explore-photos' id='room-images-list'>                
//                 <img style={style.listImageStyle} src={url}></img>
//             </td>
//           </table>
//         </div>
//       )
//     } else if (roomImgCount >= room.numImages) {
//       currentRoomIndex += 1;
//       room = props.rooms[currentRoomIndex];
//       roomImgCount = 1;
//       let roomNameLower = room.name.slice(1, -1).split('_').join(' ');
//       let roomName = room.name.charAt(0).toUpperCase().concat(roomNameLower);
//       i += 1;
//       return (
//         <div style={style.listStyle}>
//           <table>
//             <tr className='room-title'>
//               <th>{roomName}</th>
//             </tr>
//             {/* <tr style={style.listStyle} className='home-explore-photos' id='room-images-list'>
//               <td>                
//                 <img style={style.listImageStyle} src={url}></img>
//               </td>  
//             </tr> */}
//             <td style={style.listStyle} className='home-explore-photos' id='room-images-list'>                
//                 <img style={style.listImageStyle} src={url} key={i}></img>
//             </td>
//           </table>
//         </div>
//       )
//     } else {
//       roomImgCount += 1;
//       i+= 1;
//       console.log('SingleUrl: ', url);
//       return ( 
//       <div style={style.listStyle}>
//         {/* <table> */}
//           {/* <tr style={style.listStyle} className='home-explore-photos' id='room-images-list'>   */}
//             <td style={style.listStyle} className='home-explore-photos' id='room-images-list' key={i}>                
//                 <img style={style.listImageStyle} src={url}></img>
//             </td>
//           {/* </tr> */}
//         {/* </table> */}
//       </div>
//       )
//     }
//   })
// };

// export default ImageList;