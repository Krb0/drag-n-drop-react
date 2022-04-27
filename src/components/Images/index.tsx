const Images = ({
  images,
  handleRemove,
}: {
  images: string[];
  handleRemove: (file: string) => void;
}) => {
  return (
    <div className="image-container">
      {images.map((file: string, i) => (
        <div key={file}>
          <span className="image-overlay" onClick={() => handleRemove(file)}>
            <img
              src="https://iconarchive.com/download/i58687/dakirby309/windows-8-metro/Folders-OS-Recycle-Bin-Full-Metro.ico"
              className="remove-icon"
              alt="remove"
            />
          </span>
          <img src={file} alt="uploaded" />
        </div>
      ))}
    </div>
  );
};

export default Images;
