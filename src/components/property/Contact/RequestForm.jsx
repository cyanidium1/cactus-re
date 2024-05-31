import { Button } from "@nextui-org/react";

const RequestForm = () => {
  return (
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
  );
};

export default RequestForm;
