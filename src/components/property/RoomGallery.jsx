//import Image from "next/image";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import images from "./images";
import GalleryGrid from "./GalleryGrid";

const RoomGallery = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const firstImage = images[0];

  return (
    <div className="container mx-auto">
      <div className="md:flex mt-4">
        <div className="lg:w-1/2 md:w-1/2 px-[2px]">
          <div className="relative overflow-hidden">
            <img src={firstImage.src} />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2">
          <div className="flex">
            <GalleryGrid />
          </div>
        </div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
      </div>
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default RoomGallery;
