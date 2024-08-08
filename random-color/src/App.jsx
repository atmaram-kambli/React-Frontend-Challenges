import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState("HEX")
  const [color, setColor] = useState(null)

  const handleGenerateColor = () => {
    if(typeOfColor === "HEX") {
      const hexValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hex = "#";
      for(let i = 0; i < 6; i++) {
        let randm = Math.floor(Math.random() * 15);
        hex += (hexValue[randm]);
      }
      setColor(hex);
    }
    else {
      let rgb = "rgb(";
      for(let i = 0; i < 3; i++) {
        let randm = Math.floor(Math.random() * 255);
        
        rgb += randm;
        if(i != 2) rgb += ",";
      }
      rgb += ")";
      setColor(rgb);
    }
    
  }
  
  return (
    <div className=' flex items-center justify-center flex-col gap-12 h-screen w-screen' style={{background:color}}>
      <div className='flex justify-center items-center gap-5 '>

      <button onClick={() => setTypeOfColor("HEX")}>Create HEX color</button>
      <button onClick={() => setTypeOfColor("RGB")}>Create RGB color</button>
      <button onClick={handleGenerateColor}>Generate Random color</button>
      </div>

      <div> 
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default App
