import { useEffect, useState } from "react";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [topTextSize, setTopTextSize] = useState('0.15')
  const [bottomTextSize, setBottomTextSize] = useState('0.15')

  const generateMeme = ( topText, bottomText, topTextSize, bottomTextSize) => {
     
        const canvas = document.getElementById('meme-canvas');
        const ctx = canvas.getContext('2d');
    
        // canvas.width = img.width;
        // canvas.height = img.height;
        
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // if (image.length !== 0) ctx.drawImage(img, 0, 0);
    
        // Text style: white with black borders
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.textAlign = 'center';
    
        let fontSize = canvas.width * topTextSize; //Font Size will change based on our input sliders
        ctx.font = `${fontSize}px Impact`; // We'll be using Impact font, which is used by most memes
        ctx.lineWidth = fontSize / 20; // lineWidth will be the outline of our text, and we're setting it to be 20th of our fontSize here.
    
        // Draw top text
        ctx.textBaseline = 'top'; // textBaseline property specifies the current text baseline used when drawing text.
        topText.split('/n').forEach((t, i) => {
          ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width); // fillText takes 3 arguments: first is our text, second and third arguments are our X and Y coordinates of the point at which to begin drawing the text.
          ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width); // Arguments are same as fillText but strokeText draws outlines on our text.
        });
    
        // Bottom text font size
        fontSize = canvas.width * bottomTextSize;
        ctx.font = `${fontSize}px Impact`;
        ctx.lineWidth = fontSize / 20;
    
        // Draw bottom text
        ctx.textBaseline = 'bottom';
        bottomText.split('/n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
          ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
          ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        });
  }
  const uploadImage = (e) => {

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.getElementById('meme-canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // if (image.length !== 0) 
        ctx.drawImage(img, 0, 0);

        generateMeme( topText, bottomText, topTextSize, bottomTextSize)

      };
    };
  }
  useEffect(() => {
    generateMeme( topText, bottomText, topTextSize, bottomTextSize)
  }, [topText, bottomText, topTextSize, bottomTextSize])
  
  
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4">
        <Sidebar
          topText={topText}
          bottomText={bottomText}
          topTextSize={topTextSize}
          bottomTextSize={bottomTextSize}
          uploadImage={uploadImage}
          setTopText={setTopText}
          setBottomText={setBottomText}
          setBottomTextSize={setBottomTextSize}
          setTopTextSize={setTopTextSize}
        />
        <Canvas/>
      </div>
    </div>
  );
}

export default App;
