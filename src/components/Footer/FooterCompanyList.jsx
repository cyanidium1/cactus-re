const FooterCompanyList = ({ isRu }) => {
  return (
    <div className="mt-[30px] md:mt-0">
      <h5 className="tracking-[1px]  text-slate-400 font-semibold">
        {isRu ? "Компания" : "Company"}
      </h5>
      <ul className="list-none footer-list mt-6">
        <li>
          <a
            className="text-slate-400 hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "О нас" : "About us"}
          </a>
        </li>
        <li className="mt-[10px]">
          <a
            className="text-slate-400  hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Услуги" : "Services"}
          </a>
        </li>
        <li className="mt-[10px]">
          <a
            className="text-slate-400 hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Цены" : "Pricing"}
          </a>
        </li>
        <li className="mt-[10px]">
          <a
            className="text-slate-400  hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Блог" : "Blog"}
          </a>
        </li>
        <li className="mt-[10px]">
          <a
            className="text-slate-400  hover:text-green-700 duration-500 ease-in-out lightbox flex items-center"
            href=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="me-1 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
            {isRu ? "Вход" : "Login"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompanyList;
