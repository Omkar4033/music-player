import React from 'react'

function Details(props) {
  return (
    <div className='details'>
        <div className='details_img'>
     <img src={props.songs.img_src} alt=''/>
    </div>
     <h3 className='details_title'>{props.songs.title}</h3>
     <h3 className='details_Artist'>{props.songs.artist}</h3>
    </div>
    
  )
}

export default Details