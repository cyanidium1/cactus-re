import { Button } from "@nextui-org/react";

const RequestForm = () => {
  return (
    <form method="post" name="myForm" id="myForm" className="">
      <div className="flex space-x-4 mb-5">
        <div className="w-full">
          <label htmlFor="name" className="font-medium  dark:text-slate-400">
            Your Name:
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className="mt-2 border p-2 w-full rounded-lg  dark:text-slate-400"
            placeholder="Name :"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="font-medium  dark:text-slate-400">
            Your Email:
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="mt-2 border p-2 w-full rounded-lg  dark:text-slate-400"
            placeholder="Email :"
          />
        </div>
      </div>
      <div className="block">
        <div className="mb-5 w-full">
          <label htmlFor="subject" className="font-medium  dark:text-slate-400">
            Your Question:
          </label>
          <input
            name="subject"
            id="subject"
            type="text"
            className="mt-2 border p-2 w-full rounded-lg  dark:text-slate-400"
            placeholder="Subject :"
          />
        </div>
        <div className="mb-5 w-full">
          <label
            htmlFor="comments"
            className="font-medium  dark:text-slate-400"
          >
            Your Comment:
          </label>
          <textarea
            name="comments"
            id="comments"
            className="mt-2 border p-2 w-full rounded-lg  dark:text-slate-400"
            placeholder="Message :"
          ></textarea>
        </div>
      </div>
      <Button
        type="submit"
        id="submit"
        name="send"
        className="btn bg-customGreen hover:bg-green-700 text-white rounded-md"
      >
        Send Message
      </Button>
    </form>
  );
};

export default RequestForm;
