import React from "react";

function MarketingStrategies() {
  const strategies = [
    {
      title: "CONTENT MARKETING",
      description:
        "Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience and, ultimately, to drive profitable customer action.",
      image: "img/money-back.svg",
    },
    {
      title: "INBOUND MARKETING",
      description:
        "Inbound marketing is a business methodology that attracts customers by creating valuable content and experiences tailored to them. While outbound marketing interrupts your audience with content they don’t always want, inbound marketing forms connections they are looking for and solves problems they already have.",
      image: "img/service-hours.svg",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration.",
      image: "img/office.svg",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "It means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.",
      image: "img/phone.svg",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-semibold text-cusPrimary">Want to boost your business growth?</h1>
      <h1 className="text-7xl font-semibold mt-10">
        The <span className="text-cusPrimary">SOLUTION</span> is here...
      </h1>
      <p className="text-gray-600 text-xl mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quidem nemo, eaque nisi accusamus obcaecati
        sequi voluptatibus excepturi. Labore, ipsum maiores? Blanditiis magnam vero deserunt? Laudantium blanditiis odio
        deleniti sequi?
      </p>
      {/* content */}
      <div className="grid grid-cols-2 gap-20 mt-10">
        {strategies.map((item) => {
          return (
            <div
              key={item.title}
              className="border border-cusPrimary p-5 flex flex-col space-y-8 rounded transform hover:scale-105 duration-300 "
            >
              <h1 className="mx-20 text-center py-2 -m-8 bg-white border border-cusPrimary text-2xl rounded text-cusPrimary">
                {item.title}
              </h1>
              <img src={item.image} alt={item.title} className="lowercase h-24 w-24" />
              <p className="text-gray-600 text-md hover:text-cusPrimary">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketingStrategies;
