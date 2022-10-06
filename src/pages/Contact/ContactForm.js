import React from "react";

function ContactForm() {
  return (
    <div className="mt-8">
      <form action="">
        <h1 className="text-3xl font-semibold text-cusPrimary mb-5">Send a Message</h1>
        <div className="space-y-5 ">
          <div className="flex space-x-10 ">
            <input
              type="text"
              className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-800 w-full"
              placeholder="First name"
            />
            <input
              type="text"
              className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-800 w-full"
              placeholder="Last name"
            />
          </div>
          <div className="flex space-x-10">
            <input
              type="text"
              className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-800 w-full"
              placeholder="Email"
            />
            <input
              type="text"
              className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-800 w-full"
              placeholder="Phone"
            />
          </div>
          <div className="flex space-x-10">
            <textarea
              rows={8}
              className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-800 w-full"
              placeholder="Send a message..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="text-white bg-cusPrimary border border-cusPrimary px-5 py-3 rounded max-w-max hover:bg-white hover:text-cusPrimary transition">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
