import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "react-image-lightbox/style.css";
import useStore from "@/zustand/store/useStore";

const RoomGallery = ({ allPhotos, titleEn, titleRu }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { language } = useStore();
  const isRu = language === "ru";

  const handleClick = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleClose = () => setIsLightboxOpen(false);
  const handleMovePrev = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + allPhotos.length) % allPhotos.length
    );
  const handleMoveNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % allPhotos.length);

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (startIndex < allPhotos.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleImageChange = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [currentImageIndex]);

  return (
    <div className="flex justify-center md:justify-between md:space-x-2 items-center w-full h-full md:w-2/3">
      <div className="md:flex items-center justify-center md:space-x-2 mb-4 md:mb-0 w-full  max-w-[480px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] xxl:max-w-[1440px] md:flex-row ">
        <div
          className={`h-full w-full  transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={allPhotos[currentImageIndex].url}
            alt={isRu ? titleRu : titleEn}
            width={0}
            height={0}
            //priority={true}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 480px"
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
            onClick={() => handleClick(currentImageIndex)}
          />
        </div>
        <div className="flex md:flex-col p-[5px] h-full items-center justify-center max-h-[720px]">
          <button onClick={handleLeftClick} className="p-2">
            <FaAngleLeft className="w-6 h-6 fill-customGreen md:rotate-90" />
          </button>
          <div className="flex space-x-1 md:space-x-0 md:flex md:flex-col md:mx-0 items-center h-full md:space-y-1 overflow-hidden max-w-[320px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] xxl:max-w-[1440px]">
            {allPhotos.slice(startIndex, startIndex + 4).map((photo, index) => (
              <div
                key={index}
                className={`size-10 sm:size-12 md:size-14 lg:size-16 xxl:size-18 relative flex-shrink-0 cursor-pointer transition-transform transform hover:scale-105 ${
                  currentImageIndex === startIndex + index
                    ? "border-2 border-customGreen"
                    : "opacity-50 hover:opacity-75"
                }`}
                onClick={() => handleImageChange(startIndex + index)}
              >
                <Image
                  src={photo.url}
                  alt={isRu ? titleRu : titleEn}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="width-full h-auto"
                />
              </div>
            ))}
          </div>
          <button onClick={handleRightClick} className="p-2">
            <FaAngleRight className="w-6 h-6 fill-customGreen md:rotate-90" />
          </button>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          mainSrc={allPhotos[currentImageIndex].url}
          nextSrc={allPhotos[(currentImageIndex + 1) % allPhotos.length].url}
          prevSrc={
            allPhotos[
              (currentImageIndex - 1 + allPhotos.length) % allPhotos.length
            ].url
          }
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default RoomGallery;

//lg:max-h-[380px] w-full lg:max-w-[500px]
