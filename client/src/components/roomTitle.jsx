var RoomTitle = (props) => {
  return (
    <div className='room-name'>
      <h1>{room}</h1>
      <div style={style.listStyle} className='home-explore-photos' id='room-images-list'>  
        <img style={style.listImageStyle} src={url}></img>
      </div>
    </div>
  )
};

export default RoomTitle;