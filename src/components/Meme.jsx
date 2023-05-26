import React from "react"
import { useState } from 'react';
import memeData from "../memeData"


export default function Meme() {
  // Start meme image state with empty string for now
  const [memeImage, setMemeImage] = useState("")

  function fetchMemeImage() {
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // const url = memesArray[randomNumber].url
    setMemeImage(memesArray[randomNumber].url)
    
  }

  return (
    <main className="meme">
        <div className="input-area">
            <input className="input-box" placeholder="Shup up" type="text" />
            <input className="input-box" placeholder="And take my money!" type="text" />
            <button 
                className="fetch-image-button"
                onClick={fetchMemeImage}
            >
                🖼️Get a new meme image!🖼️
            </button>
        </div>
        <img className="meme-image" src={memeImage} />
    </main>
  )
}