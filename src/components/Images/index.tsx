const Images = ({ images }: { images: string[] }) => {
  return (
    <div className="image-container">
      {images.map((file: string, i) => (
        <img src={file} alt="uploaded" key={file} />
      ))}
    </div>
  );
};

export default Images;
