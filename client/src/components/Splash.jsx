import React from 'react';
import style from '../../styles.css.js';

var Splash = (props) => {
  let splashImage = props.imageUrls[24] || props.imageUrls[0];
  return (
    <div className='splash' id='splash-image'>
        <img src={splashImage} style={style.splashImageStyle} ></img>
    </div>
  )
};

export default Splash;