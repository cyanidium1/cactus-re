import Image from "next/image";
import React from "react";

import Layout from "@/components/Layout";
import RequestForm from "@/components/property/Contact/RequestForm";
import { Button } from "@nextui-org/react";

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
              <form method="post" name="myForm" id="myForm" className="">
                <div className="flex space-x-4 mb-5">
                  <div className="w-full">
                    <label htmlFor="name" className="font-medium">
                      Your Name:
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="mt-2 border p-2 w-full rounded-lg"
                      placeholder="Name :"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="font-medium">
                      Your Email:
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="mt-2 border p-2 w-full rounded-lg"
                      placeholder="Email :"
                    />
                  </div>
                </div>
                <div className="block">
                  <div className="mb-5 w-full">
                    <label htmlFor="subject" className="font-medium">
                      Your Question:
                    </label>
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      className="mt-2 border p-2 w-full rounded-lg"
                      placeholder="Subject :"
                    />
                  </div>
                  <div className="mb-5 w-full">
                    <label htmlFor="comments" className="font-medium">
                      Your Comment:
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      className="mt-2 border p-2 w-full rounded-lg "
                      placeholder="Message :"
                    ></textarea>
                  </div>
                </div>
                <Button
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                >
                  Send Message
                </Button>
              </form>
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
  <RequestForm />
</div>; */
}
