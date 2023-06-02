# MemeGenerator
This is a basic React JSX project that allows you to create your own funny meme by adding text to a randomly fetched meme image from the imgflip API. You can input your desired text in two text input fields, and the text will be displayed over the image.

## Features
-[X] Fetches random meme images from the imgflip API.
-[X] Allows you to input text for the top and bottom sections of the meme.
-[X] Renders the entered text over the meme image.
-[X] Updates the meme image and clears the text fields when a new meme is fetched.

## How to use
* On the main page, you will see a default meme image with two text input fields and a "Get a new meme image!" button.
* Enter your desired text in the top and bottom text input fields to customize the meme.
* Text will be displayed over the meme image in real-time.
* To fetch a new meme image, click the "Get a new meme image!" button. This will fetch a different random image and clear the text fields, allowing you to create a new meme.

## Setup
1. Clone the repo with:
```git clone <repository-url>```

2. Navigate to the project directory:
```cd meme-generator```

3. Install the dependencies with npm or yarn:
```npm install``` 
OR
```yarn install```

4. Start the dev server:
```npm run dev```
OR
```yarn dev```

Click on the http://localhost link in your terminal after successful startup to see the running app in your browser.
Make sure you have Node.js installed on your machine.
Note: This project uses **Vite** as the build tool, which provides a fast development server and optimized builds.

## Credits
This project uses the imgflip API (https://api.imgflip.com/) to fetch random meme images.