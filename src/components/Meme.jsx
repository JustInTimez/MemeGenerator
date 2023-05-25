import React from "react"

export default function Meme() {
  return (
    <main className="meme">
        <div className="input-area">
            <input className="input-box" placeholder="Shup up" type="text" />
            <input className="input-box" placeholder="And take my money!" type="text" />
            <button className="fetch-image-button">🖼️Get a new meme image!🖼️</button>
        </div>

    </main>
  )
}