const FooterContactDetails = () => {
  return (
    <div className="lg:col-span-3 md:col-span-4">
      <h5 className="tracking-[1px] text-gray-100 font-semibold">
        Contact details
      </h5>
      <div className="flex mt-6">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-green-600 me-3"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <div className="">
          <h6 className="text-gray-300 mb-2">There will be adress</h6>
          <a
            datatype="iframe"
            className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox"
            href=""
          >
            View on Google map
          </a>
        </div>
      </div>
      <div className="flex mt-6">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-green-600 me-3"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <div className="">
          <a
            className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
            href="mailto:contact@example.com"
          >
            contact@example.com
          </a>
        </div>
      </div>
      <div className="flex mt-6">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-green-600 me-3"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <div className="">
          <a className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">
            + 44 444 444 4444
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContactDetails;
