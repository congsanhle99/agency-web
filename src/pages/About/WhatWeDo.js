import React from "react";

function WhatWeDo() {
  const items = [
    {
      title: "Web Development",
      icon: "img/web.png",
      description: "Web development is the work involved in developing a website for the Internet or an intranet.",
    },
    {
      title: "Mobile Development",
      icon: "img/mobile.png",
      description:
        "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
    },
    {
      title: "Digital Marketing",
      icon: "img/digital-marketing.png",
      description:
        "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },

    {
      title: "Graphic Design",
      icon: "img/graphicdesign.png",
      description:
        "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
  ];

  return (
    <div className="z-20 mt-[56rem]">
      <h1 className="text-cusPrimary text-8xl text-center z-20 font-semibold ">What We Do?</h1>
      <div className="h-96 w-full bg-cusPrimary mt-12"></div>
      <div className="grid grid-cols-4 gap-10 mx-32 -mt-48">
        {items.map((item) => (
          <div className="p-5 bg-white border shadow rounded ex-col space-y-5 items-center hover:scale-105 duration-300 transform">
            <img src={item.icon} className="h-20 w-20" alt="" />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
