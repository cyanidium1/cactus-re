import Image from "next/image";
import React from "react";

import Layout from "@/components/Layout";
import RequestForm from "@/components/property/Contact/RequestForm";


function contact(props) {
  return (
    <Layout>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <section className="relative lg:py-24 py-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-7 md:col-span-6">
            <img
              src="/images/contact.svg"
              alt=""
              className="size-300 sm:size-456 md:size-353 lg:size-530 xl:size-64 "
            />
          </div>
          <div className="lg:col-span-5 md:col-span-6 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-900 border rounded-md shadow dark:shadow-gray-700 p-6 w-[350px] sm:items-center sm:justify-center">
              <h3 className="mb-6 text-2xl leading-normal font-medium">
                Get in touch !
              </h3>
              <RequestForm />
            </div>
          </div>
        </div>
      </section>
      {/* </main> */}
    </Layout>
  );
}

export default contact;

{
  /* <div className="flex">
  <Image />
  
</div>; */
}
