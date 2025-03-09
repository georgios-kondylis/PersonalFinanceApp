import React, { useState } from "react";
import { navLinks } from "../../utils";
import { NavLink, useLocation } from "react-router-dom";

const SmallNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { pathname } = useLocation(); // To get the current path

  return (
    <section className="w-full fixed bottom-0 gray1 h-[63px] txt3b rounded-t-[15px]">
      <nav className="h-full w-full flex flex-col pt-[7px] justify-between sm:px-[20px]">
        <div id="NAVLINKS" className="flex w-full justify-between">
          {navLinks.map((link, i) => {
            return (
              <NavLink
                to={link.url} // Corrected to "to" instead of "href"
                key={i}
                className={({ isActive }) => 
                  `navlink-small h-[55px] text-nowrap w-full relative ${
                    isActive ? "small-linkIsActive" : ""
                  }`
                }
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.svgPath && (
                  <svg
                    className={`${
                      link.name === "Overview" && "max-sm:scale-[1.5] ml-[7px]"
                    } 
                    ${link.name === "Transactions" && "max-sm:scale-[1.5] pt-[3px] ml-[7px]"} 
                    ${link.name === "Budgets" && "max-sm:scale-[1.5] ml-[7px]"} 
                    ${link.name === "Pots" && "max-sm:scale-[1.5] ml-[5px]"} 
                    ${link.name === "Recurring bills" && "max-sm:scale-[1.5] ml-[5px]"} `}
                    width="20"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={link.svgPath} />
                  </svg>
                )}
                <p className="link-name max-sm:hidden">{link.name}</p>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default SmallNav;
