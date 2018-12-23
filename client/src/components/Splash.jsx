import React from 'react';
import style from '../../styles.css.js';

var Splash = (props) => {
  let splashImage = props.imageUrls[24];
  return (
    <div className='splash' id='splash-image'>
      <div>
        <img src={splashImage} style={style.splashStyle} ></img>
      </div>
    </div>
  )
};

export default Splash;