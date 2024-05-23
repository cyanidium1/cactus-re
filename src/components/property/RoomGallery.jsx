//import Image from "next/image";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import images from "./images";

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

  return (
    <div className="container mx-auto">
      <div className="md:flex mt-4">
        <div className="lg:w-full md:w-full  px-3 p-1">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
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
        {/* <div className="lg:w-1/2 md:w-1/2">
          <div className="flex">
            <div className="w-1/2 p-1"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RoomGallery;

{
  /* <div className="group relative overflow-hidden">
  <ul className="flex gap-[2px]">
    <li>
      <Image
        src="/images/avalon-555-president-baltimore-md-primary-photo.jpg"
        height={300}
        width={400}
        alt="Avalon 555 President"
      />
    </li>
    <li>
      <Image
        src="/images/jasper-san-francisco-ca-lounge-with-fireplace.jpg"
        height={300}
        width={400}
        alt="Jasper San Francisco"
      />
    </li>
    <li>
      <Image
        src="/images/ParkLine-apartment-in-Miami-FL.jpg.webp"
        height={300}
        width={400}
        alt="ParkLine Apartment"
      />
    </li>
    <li>
      <Image
        src="/images/the-huntley-atlanta-ga-luxury-apartment-view.jpg"
        height={300}
        width={400}
        alt="The Huntley Atlanta"
      />
    </li>
    <li>
      <Image
        src="/images/zen-hollywood-los-angeles-ca-pool.jpg"
        height={300}
        width={400}
        alt="Zen Hollywood"
      />
    </li>
  </ul>
</div>; */
}
