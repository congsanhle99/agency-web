import React, { useState } from "react";

function ClientList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const clients = [
    {
      name: "Slack",
      logo: "img/slack.png",
      url: "https://www.tcs.com/",
      description:
        "Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.",
    },
    {
      name: "Twitter",
      logo: "img/twitter.png",
      url: "https://www.infosys.com/",
      description:
        "Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.",
    },
    {
      name: "Instagram",
      logo: "img/instagram.png",
      url: "https://www.wipro.com/",
      description:
        "Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.",
    },
    {
      name: "Spotify",
      logo: "img/spotify.png",
      url: "https://www.hcl.com/",
      description:
        "Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.",
    },
    {
      name: "Messenger",
      logo: "img/messenger.png",
      url: "https://www.accenture.com/",
      description:
        "Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.",
    },
    {
      name: "Cognizant",
      logo: "img/cognizant.png",
      url: "https://www.capgemini.com/",
      description:
        "Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.",
    },
    {
      name: "Github",
      logo: "img/github.png",
      url: "https://www.cognizant.com/",
      description:
        "GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.",
    },
  ];

  const next = () => {
    setSelectedClientIndex(selectedClientIndex + 1);
  };

  const previous = () => {
    setSelectedClientIndex(selectedClientIndex - 1);
  };

  return (
    <>
      <div>
        <div className="bg-gray-700 h-44 rounded-b-full"></div>
        <div className="flex justify-center -mt-44 items-center space-x-10">
          {selectedClientIndex !== 0 && (
            <i
              className="text-2xl text-cusPrimary cursor-pointer hover:text-white hover:bg-cusPrimary rounded transition p-2 fa-solid fa-arrow-left"
              onClick={previous}
            ></i>
          )}
          <div className="grid grid-cols-3 gap-4 transition-all">
            {[clients[selectedClientIndex], clients[selectedClientIndex + 1], clients[selectedClientIndex + 2]].map(
              (item, index) => (
                <div key={index} className="bg-white shadow p-5 w-[400px] border h-[400px]">
                  <div className="flex space-x-10 items-center justify-between">
                    <h1 className="text-cusPrimary font-semibold text-2xl">{item.name}</h1>
                    <img src={item.logo} className="h-32 w-32" alt="" />
                  </div>
                  <p className="text-gray-600 text-md mt-10">{item.description}</p>
                </div>
              )
            )}
          </div>
          {selectedClientIndex < 4 && (
            <i
              className="text-2xl text-cusPrimary cursor-pointer hover:text-white hover:bg-cusPrimary rounded transition p-2 fa-solid fa-arrow-right"
              onClick={next}
            ></i>
          )}
        </div>

        <div className="flex items-center justify-center mt-10 gap-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={item.index}
              className={`bg-cusPrimary h-4 w-4 rounded-full cursor-pointer hover:scale-105 duration-300 transform ${
                selectedClientIndex === index && `border-2 border-cusPrimary bg-white`
              }`}
              onClick={() => setSelectedClientIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ClientList;
