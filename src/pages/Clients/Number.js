import React from "react";

function Number() {
  return (
    <div className="px-52 mt-20">
      <h1 className="text-2xl text-gray-600 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ab.
      </h1>
      <div className="flex items-center justify-between rounded space-x-8 bg-cusPrimary p-10">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-8xl text-white">152</h1>
          <h1 className="text-2xl text-white">Clients</h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-8xl text-white">342</h1>
          <h1 className="text-2xl text-white">Projects</h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-8xl text-white">11</h1>
          <h1 className="text-2xl text-white">Locations</h1>
        </div>
      </div>
    </div>
  );
}

export default Number;
