import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const RoomGallery = ({ allPhotos, titleEn }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    }, 300); // Duration of the transition
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [currentImageIndex]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-full max-w-[480px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] xxl:max-w-[1440px]">
        <div
          className={`relative transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={allPhotos[currentImageIndex].url}
            alt={titleEn}
            width={1280}
            height={720}
            priority
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 480px"
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
            onClick={() => handleClick(currentImageIndex)}
          />
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={handleLeftClick} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15.293 18.707a1 1 0 010-1.414L9.414 12l5.879-5.879a1 1 0 00-1.414-1.414l-6.586 6.586a1 1 0 000 1.414l6.586 6.586a1 1 0 001.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex overflow-hidden w-full max-w-[320px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] xxl:max-w-[1440px] space-x-4">
          {allPhotos.slice(startIndex, startIndex + 4).map((photo, index) => (
            <div
              key={index}
              className={`w-24 h-24 relative flex-shrink-0 cursor-pointer transition-transform transform hover:scale-105 ${
                currentImageIndex === startIndex + index
                  ? "border-2"
                  : "opacity-50 hover:opacity-75"
              }`}
              onClick={() => handleImageChange(startIndex + index)}
            >
              <Image
                src={photo.url}
                alt={titleEn}
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <button onClick={handleRightClick} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8.707 5.293a1 1 0 010 1.414L14.586 12l-5.879 5.879a1 1 0 101.414 1.414l6.586-6.586a1 1 0 000-1.414l-6.586-6.586a1 1 0 00-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
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
