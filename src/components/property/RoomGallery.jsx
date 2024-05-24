//import Image from "next/image";
import { useState } from "react";
//import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import images from "./images";
import GalleryGrid from "./GalleryGrid";
import Image from "next/image";

const RoomGallery = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const firstImage = images[0];

  return (
    <div className="flex justify-center">
      <div className="md:flex w-full">
        <div className="lg:w-1/2 md:w-1/2 pb-[8px] md:pb-0 md:px-[8px] m-0 flex justify-center">
          <Image
            src={firstImage.src}
            alt={firstImage.caption}
            width={600}
            height={400}
            onClick={() => handleClick(0)}
            priority
            style={{
              width: "auto",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2">
          <div className="flex">
            <GalleryGrid handleClick={handleClick} />
          </div>
        </div>
        {/* <Gallery
          images={images}
          onClickThumbnail={(index) => handleClick(index)}
          enableImageSelection={false}
        /> */}
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
