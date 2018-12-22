import React from 'react';

var Splash = (props) => {
  console.log('qweqwe: ', props.imageUrls);
  return props.imageUrls.map(url => {
    console.log('SingleUrl: ', url);
    return ( 
    <div>  
      <img src={url}></img>
    </div>
    )
  })
};

export default Splash;