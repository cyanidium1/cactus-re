import FooterDownLinks from "./FooterDownLinks";

const FooterDown = () => {
  return (
    <div className="px-0 border-t border-gray-800 dark:border-gray-700">
      <div className="container text-center">
        <div className="flex justify-between items-center gap-6">
          <div className="md:text-start text-center">
            <p className="mb-0 text-gray-300">
              {"\u00A9"} 2024 Cactus. Made with love
            </p>
          </div>
          <FooterDownLinks />
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
