import Layout from "@/components/Layout";
import useStore from "@/zustand/store/useStore";

export default function Privacy() {
  const { translations } = useStore();

  const title = translations.Privacy.title.split(" ");
  return (
    <Layout>
      <div className=" mx-auto ">
        <h2 className="dark:text-white text-3xl font-medium py-4  md:text-4xl ">
          {title[0]} <span className="text-green-700">{title[1]}</span>
        </h2>
        {translations.Privacy.content.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <h2 className="dark:text-white font-bold mb-2 text-xl md:text-2xl ">
                {item.title}
              </h2>
              <p className="dark:text-white ">{item.text}</p>
            </div>
          );
        })}
        <p className="text-xl pb-2 font-semibold text-green-700">
          <a href="mailto:cactusbusines@gmail.com" className="text-green-700">
            cactusbusines@gmail.com
          </a>
        </p>
      </div>
    </Layout>
  );
}
