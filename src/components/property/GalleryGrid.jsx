import Image from "next/image";

import images from "./images";

const GalleryGrid = ({ handleClick, photos }) => {
  const imgToShoiw = images.slice(1);
  const elements = photos.map((image, index) => (
    <li key={index} className="">
      {image && image.src && (
        <Image
          src={image.src}
          width={300}
          height={300}
          alt={image.caption || "Gallery image"}
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
          onClick={() => handleClick(index + 1)}
        />
      )}
    </li>
  ));

  return (
    <ul className="grid grid-cols-2 gap-[8px] list-none p-0 m-0">{elements}</ul>
  );
};

export default GalleryGrid;
