import React from "react";

function Intro() {
  return (
    <>
      <div className="about-intro h-screen"></div>
      <div className="grid grid-cols-2 items-center min-h-screen">
        <div className="z-10 flex justify-center">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_dews3j6m.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="z-10 max-w-max flex flex-col space-y-5">
          <h1 className="text-8xl font-semibold text-white uppercase">marketing</h1>
          <hr />
          <h1 className="text-xl text-white uppercase">order | stronger | wiser</h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
