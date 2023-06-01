import React from "react"
import { useState } from 'react';
import memeData from "../memeData"


export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMeme, setAllMemeImages] = useState(memeData)

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value
      }
    })
  }

  function fetchMemeImage() {
    const memesArray = allMeme.data.memes
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
        <input 
          className="input-box" 
          placeholder="Top Text" 
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
        <input
          className="input-box"
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="fetch-image-button" onClick={fetchMemeImage}>
          🖼️Get a new meme image!🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}