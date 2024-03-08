import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-3 justify-center fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("red")}>
            Red
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("green")}>
            Green
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("blue")}>
            Blue
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("pink")}>
            Pink
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("gray")}>
            Gray
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("yellow")}>
            Yellow
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("purple")}>
          Purple
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full outline-none shadow-lg" onClick={()=>setColor("black")}>
          Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
