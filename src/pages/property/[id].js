import { useRouter } from "next/router";

//import data from "./data.json";
import RoomGallery from "./roomGallery";
import RoomQualities from "./RoomQualities";
import RoomDescription from "./RoomDescription";
import RoomPrices from "./RoomPrices";
import ActionButtons from "./ActionButtons";
import ContactUsButton from "./ContactUsButton";
import Layout from "@/components/Layout";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    //<section className="relative md:pb-24 pb-16 mt-20 px-[40px]">
    <Layout>
      <RoomGallery />
      <div className="container md:mt-24 mt-16 px-[12px] md:px-[16px] lg:px-[45px] xl:px-[80px] xxl:px-[45px] ">
        <div className="md:flex justify-center">
          <div className="lg:w-2/3 md:w-full md:p-4 px-3">
            <h4 className="text-2xl forn-medium">Oriental Residence 1+1</h4>
            <RoomQualities bath="2" />
            <RoomDescription />
            <div>There will be adress picture</div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
            <div className="sticky top-20">
              <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                <RoomPrices price="1500" />
                <ActionButtons />
              </div>
              <ContactUsButton />
            </div>
          </div>
        </div>
      </div>
    </Layout>
    //</section>
  );
}
