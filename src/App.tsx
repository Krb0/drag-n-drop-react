import React, { useState } from "react";
import "./app.css";
import Images from "./components/Images";
import Uploader from "./components/Uploader";
function App() {
  const [images, setImages] = useState<string[]>([]);
  const handleRemove = (file: string) => {
    const newImages = [...images];
    newImages.splice(newImages.indexOf(file), 1);
    setImages(newImages);
  };
  return (
    <div className="app">
      <Images images={images} handleRemove={handleRemove} />
      <Uploader setImages={setImages} images={images} />
    </div>
  );
}

export default App;
