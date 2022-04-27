import { SetStateAction } from "react";

const Uploader = ({
  setImages,
}: {
  setImages: React.Dispatch<SetStateAction<string[]>>;
}) => {
  const imageHandler = (e: any) => {
    const fileArray = Object.values(e.target.files);
    const imageArr: any = [];
    fileArray.forEach((file: any) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          imageArr.push(reader.result);
          setImages([...imageArr]);
        }
      };
    });
  };
  return (
    <div>
      <label htmlFor="file-upload" className="label">
        <span>Custom Upload</span>
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Background-PNG-Image.png"
          alt="upload"
        />
      </label>
      <input
        type="file"
        id="file-upload"
        accept=".png,.jpg,.jpeg"
        multiple
        onChange={(e: any) => imageHandler(e)}
      />
    </div>
  );
};

export default Uploader;
