import React from "react";

function intro() {
  return (
    <div className="grid md:grid-cols-2 h-screen items-center">
      <div className="flex flex-col space-y-10 mt-10 md:mt-0">
        <h1 className="font-semibold text-6xl sm:text-7xl ">
          The best <br />
          <span className="text-cusPrimary">marketing</span>
        </h1>
        <h1 className="font-semibold text-4xl sm:text-5xl ">Doesn't feel like marketing</h1>
        <button className="px-10 py-4 bg-cusPrimary text-white text-xl max-w-max border border-cusPrimary rounded hover:text-cusPrimary hover:bg-transparent hover:border-cusPrimary transition">
          Get started
        </button>
      </div>
      <div className="h-[200px] md:h-full">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_hwcplx4x.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default intro;
