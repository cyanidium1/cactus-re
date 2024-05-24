import Image from "next/image";

import images from "./images";

const GalleryGrid = () => {
  const imgToShoiw = images.slice(1);
  const elements = imgToShoiw.map((image, index) => (
    <li key={index} className="">
      <Image src={image.src} width={300} height={300} />
    </li>
  ));

  console.log(elements);
  return (
    <ul className="grid grid-cols-2 gap-[4px] list-none p-0 m-0">{elements}</ul>
  );
};

export default GalleryGrid;
