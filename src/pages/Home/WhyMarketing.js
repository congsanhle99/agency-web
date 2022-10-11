import React from "react";

function WhyMarketing() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl md:text-8xl font-semibold ">
        Why <span className="text-cusPrimary">Marketing</span> ?
      </h1>
      <div className="h-[500px]">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_mftd0tzf.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="text-gray-600 text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis ut? Ipsam illum odit aperiam porro
        assumenda eos animi ad quo adipisci iste aspernatur rem asperiores, voluptatum repellendus! Nisi, illo.
      </p>
      <h1 className="text-cusPrimary text-4xl font-semibold mt-10">
        The answers to all these question lie in marketing.
      </h1>
      <p className="text-gray-600 text-md mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis ut? Ipsam illum odit aperiam porro
        assumenda eos animi ad quo adipisci iste aspernatur rem asperiores, voluptatum repellendus! Nisi, illo. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis ut? Ipsam illum odit aperiam porro
        assumenda eos animi ad quo adipisci iste aspernatur rem asperiores, voluptatum repellendus! Nisi, illo.
      </p>
    </div>
  );
}

export default WhyMarketing;
