// import './loader.css'

const Loader = () => {
  return (
    <div className="backdropL bg-white dark:bg-black relative">
      <img
        src="/images/cactusSvg.svg"
        className="w-2/3 sm:w-1/2 absolute -right-[10%] -bottom-[10%] opacity-25 cactus"
      />
      <div className="loader relative">
        <div className="loader-text absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] ">
          <p className="text-3xl sm:text-6xl text-nowrap">
            CACTUS | Real Estate
          </p>
          {/* Loader v.0.1.3 by cyanidium */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
