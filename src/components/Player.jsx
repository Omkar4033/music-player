import React, { useEffect, useRef, useState } from 'react'
import Details from './Details'
import Control from './Control'

function Player(props) {
    const audioE1=useRef(null);
    const [isPlaying,setIsPlaying]=useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioE1.current.play();
        }
        else{
            audioE1.current.pause();
        }
    })

    const skipSong=(fowards) => {
        if(fowards){
            props.setcurrentsongindex(() => {
                let temp=props.currentsongindex;
                temp++;

                if(temp>props.songs.length-1){
                    temp=0;
                }
                return temp;
            }
        );}
        else{
            props.setcurrentsongindex(()=>{
                let temp=props.currentsongindex;
                temp--;

                if(temp<0){
                    temp=props.songs.length-1;
                }
                return temp;
            })
        }
    }

  return (
    <div className="player">
    <h4>Playing Now</h4>
    <Details
        songs={props.songs[props.currentsongindex]}
    />
    <Control
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
    />
    <audio
    className="player_audio"
    src={props.songs[props.currentsongindex].src}
    ref={audioE1}
    controls>

    </audio>
    <p>
      Next Up: <span>
      {props.songs[props.nextsongindex].title} by {" "} 
      {props.songs[props.nextsongindex].artist} 
      </span>
    </p>
  </div>
  )
}

export default Player