import { PiTelegramLogoLight, PiTiktokLogoLight } from "react-icons/pi";

const FooterDownLinks = () => {
  return (
    <ul className="list-none md:text-end text-center flex justify-center items-center">
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a href="" target="_blank">
            <PiTelegramLogoLight className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a href="" target="_blank">
            <PiTiktokLogoLight className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>

      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            className=" text-gray-400 hover:text-white "
            href="https://www.facebook.com/CactusRealEstateAlbania/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            className=" text-gray-400 hover:text-white"
            href="https://www.instagram.com/cactus_realestate/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a className=" text-gray-400 hover:text-white" href="mailto:support">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default FooterDownLinks;
