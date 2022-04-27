import React, { useState } from "react";
import "./app.css";
import Images from "./components/Images";
import Uploader from "./components/Uploader";
function App() {
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="app">
      <Images images={images} />
      <Uploader setImages={setImages} images={images} />
    </div>
  );
}

export default App;
