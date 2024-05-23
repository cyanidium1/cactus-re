import { useRouter } from "next/router";


import Layout from "@/components/Layout";
import RoomQualities from "@/components/property/RoomQualities";
import RoomDescription from "@/components/property/RoomDescription";
import RoomGallery from "@/components/property/RoomGallery";
import RoomPrices from "@/components/property/RoomPrices";
import ActionButtons from "@/components/property/ActionButtons";
import ContactUsButton from "@/components/property/ContactUsButton";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <RoomGallery />
      <div className="container md:mt-24 mt-16">
        <div className="md:flex">
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
                <ContactUsButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
