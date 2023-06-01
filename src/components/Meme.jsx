import React from "react"
import { useState } from 'react';
import memeData from "../memeData"


export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImages, setAllMemeImages] = useState(memeData)

  function fetchMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
  }

  return (
    <main>
      <div className="input-area">
        <input className="input-box" placeholder="Shup up" type="text" />
        <input
          className="input-box"
          placeholder="And take my money!"
          type="text"
        />
        <button className="fetch-image-button" onClick={fetchMemeImage}>
          🖼️Get a new meme image!🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} />
        <h2 className="meme-text top">Top text</h2>
        <h2 className="meme-text bottom">Bottom text</h2>
      </div>
    </main>
  );
}