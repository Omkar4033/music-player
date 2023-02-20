import React from "react";
import { useEffect, useState } from "react";
import Player from "./components/Player";


function App() {

const [songs]=useState([
  {
    title: "Senorita",
    artist: "ZNMD",
    img_src: "./Images/ZNMD.jpg",
    src: "./songs/04. Senorita.mp3"
  },
  {
    title: "Kolaveri D",
    artist: "Dhanush",
    img_src: "./Images/Kolaveri.jpeg",
    src: "./songs/Why This Kolaveri Di   Dhanush 320kbps.mp3"
  },
  {
    title: "OM Deva Deva",
    artist: "Arijit Singh",
    img_src: "./Images/Om deva deva.jpeg",
    src: "./songs/Om-Deva-Deva-Namah(PagalWorld).mp3"
  }
])

const [currentsongindex,setcurrentsongindex]=
useState(0);
const [nextsongindex,setnextsongindex]=
useState(0);

useEffect(()=> {
 setnextsongindex(()=>{
  if(currentsongindex+1 > songs.length -1)
  {
    return 0;
  }
  else{
    return currentsongindex+1;
  }
 })
},[currentsongindex,songs.length])

  return (
    <div className="App">
      <Player
        currentsongindex={currentsongindex}
        setcurrentsongindex={setcurrentsongindex}
        nextsongindex={nextsongindex}
        songs={songs}
      />
    </div>
  );
}

export default App;
