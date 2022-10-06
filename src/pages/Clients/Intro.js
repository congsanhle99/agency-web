import React from "react";

function Intro() {
  return (
    <div className="h-screen bg-gray-700 grid grid-cols-2 items-center">
      <div className="h-[500px]">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_jimqos21.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="pr-20">
        <h1 className="text-white text-8xl font-semibold">
          We&nbsp;
          <span className="text-orange-600">
            work
            <br />
          </span>
          together with <br /> our
          <span className="text-green-600"> clients</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt ipsam, omnis minima in eum delectus
          molestias at rem perferendis est doloremque eos reiciendis unde, aspernatur a saepe magnam exercitationem?
        </p>
      </div>
    </div>
  );
}

export default Intro;
