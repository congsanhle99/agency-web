import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl flex-col space-y-10 p-10 text-cusPrimary shadow">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perspiciatis, impedit culpa id eligendi ipsum
          tempore ducimus nihil, voluptatem, ex eaque officia iure doloremque vel.
        </p>
        <div className="flex space-x-5 items-center just">
          <div className="h-12 w-12 bg-cusPrimary text-white p-2 rounded border border-cusPrimary flex items-center justify-center hover:bg-white hover:text-cusPrimary transition">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="text-gray-600 font-medium">
            <h1 className="text-xl text-gray-800 font-semibold capitalize">Visit Us</h1>
            <p>New York city</p>
            <p>England</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center just">
          <div className="h-12 w-12 bg-cusPrimary text-white p-2 rounded border border-cusPrimary flex items-center justify-center hover:bg-white hover:text-cusPrimary transition">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div className="text-gray-600 font-medium">
            <h1 className="text-xl text-gray-800 font-semibold capitalize">Mail Us</h1>
            <p>example@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center just">
          <div className="h-12 w-12 bg-cusPrimary text-white p-2 rounded border border-cusPrimary flex items-center justify-center hover:bg-white hover:text-cusPrimary transition">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="text-gray-600 font-medium">
            <h1 className="text-xl text-gray-800 font-semibold capitalize">Call Us</h1>
            <p>(+343) 123 5443 979</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
