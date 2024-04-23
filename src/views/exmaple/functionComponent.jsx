import React from "react";  


// Function component
const childFcComponent = (props)=> {
    const {sayhi, song} = props
    console.log('song',song)
    return (
        <>
            <div>{sayhi}</div>
            <div>
            {song && song.map((item)=>{
               return ( <div key={item.id}>
                 <div>this is the name of this song {item.song}</div>
             <div>this is the views of this song {item.views}</div>
             </div>
                )})}
            </div>
        </>
    )
}
export default childFcComponent;