import React from "react";
import { Link, useLocation } from "react-router-dom";

// props children của Layout
function Layout({ children }) {
  const location = useLocation();
  const menuItems = [
    { title: "Home", path: "/", icon: "fa-solid fa-house" },
    { title: "About", path: "/about", icon: "fa-solid fa-circle-info" },
    { title: "Clients", path: "/clients", icon: "fa-solid fa-user-tag" },
    { title: "Contact", path: "/contact", icon: "fa-solid fa-address-card" },
  ];

  return (
    <div>
      {/* content */}
      <div className="pb-32">{children}</div>
      {/* footer */}
      <div className="fixed bottom-0 left-0 right-0">
        <div className="flex w-full justify-center  ">
          {menuItems.map((item, index) => (
            <div className="flex flex-col justify-end items-center">
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 bg-cusPrimary rounded-t-full"></div>
                  <div className="h-5 w-20 bg-cusPrimary rounded-t-full text-center">
                    <i className={`${item.icon} text-white`}></i>
                  </div>
                </div>
              )}
              <div
                className={`bg-cusPrimary px-20 py-5 ${index === 0 && "rounded-l"} ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2`}
              >
                {location.pathname !== item.path && <i className={`${item.icon} text-white`}></i>}
                <Link to={item.path} className="text-white font-semibold text-lg">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
