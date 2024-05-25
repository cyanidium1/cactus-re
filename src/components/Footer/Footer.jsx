import Logo from "../Logo";
import FooterCompanyList from "./FooterCompanyList";
import FooterContactDetails from "./FooterContactDetails";
import FooterDown from "./FooterDown";
import FooterUseFullLinks from "./FooterUsefullLinks";

const Footer = () => {
  return (
    <footer className=" bg-slate-600 px-[45px] mx-auto w-full ">
      <div className="mx-auto sm:m-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] xxl:max-w-[1440px]">
        <div className="py-16 lg:flex lg:justify-between lg:gap-[30px] xl:gap-[50px]">
          <div className="md:mb-[30px]">
            <Logo />
            <p className="mt-6 text-gray-300 lg:w-[290px] xl:w-[350px]">
              A great platform to buy, sell and rent your properties without any
              agent or commissions.
            </p>
          </div>
          <div className="md:flex md:justify-between lg:w-full">
            <FooterCompanyList />
            <FooterUseFullLinks />
            <FooterContactDetails />
          </div>
        </div>
        <FooterDown />
      </div>
    </footer>
  );
};

export default Footer;

//Subscribe for information
{
  /* <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div className="md-text-start text-center z-1">
                  <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
                    Subscribe to newsletter!
                  </h3>
                  <p className="text-slate-400 max-w-xl mx-auto">
                    Subscribe to get latest updates and information.
                  </p>
                </div>
                <div className="subscribe-form z-1">
                  <form className="relative max-w-lg md:ms-auto">
                    <input
                      type="email"
                      id="subscribe"
                      name="email"
                      className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                      placeholder="Enter your email :"
                    />
                    <button
                      type="submit"
                      className="btn bg-green-600 hover:bg-green-700 text-white rounded-full"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="absolute -top-5 -start-5">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg>
              </div>
              <div className="absolute -bottom-5 -end-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"></path>
                </svg>
              </div>
            </div> */
}
