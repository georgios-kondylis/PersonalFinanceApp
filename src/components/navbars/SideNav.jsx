import React, { useState } from "react"; 
import { navLinks } from "../../utils"; 
import { NavLink } from "react-router-dom"; 
import Logo from "../ui/Logo";
import ToggleSideBar from "../ui/ToggleSideBar";
const SideNav = ({ navIsOpen, toggleNav }) => { 
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  return ( 
    <section className={`beige1 min-h-screen txt3b transition1 
            ${navIsOpen ? "max-w-[280px] w-[280px] superwide:max-w-[380px] superwide:w-[380px]" : "max-w-[80px] w-[80px]"}`}> 
      <nav className="h-full gray1 rounded-tr-[15px] rounded-br-[15px] flex flex-col justify-between"> 
        <div className="w-full h-[100vh] flex flex-col"> 
          <Logo navIsOpen={navIsOpen}/>
          <div id="NAVLINKS" className="flex justify-between h-full flex-col"> 
            <div>
              {navLinks.map((link, i) => { 
                return ( 
                  <NavLink to={link.url} key={i} className={({ isActive }) => `navlink ${navIsOpen ? "mr-[17px]" : "mr-[4px]"} relative ${isActive ? "linkIsActive" : ""}`} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}> 
                    {link.svgPath && ( 
                      <svg className={`${link.name === "Overview" && "scale-[1.1]"} ${link.name === "Transactions" && "scale-[1.3]"} ${link.name === "Budgets" && "scale-[1.1]"} ${link.name === "Pots" && "scale-[1.1]"} ${link.name === "Recurring bills" && "pt-[3px] scale-[1.2]"}`} width="20" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> 
                        <path d={link.svgPath} /> 
                      </svg> 
                    )} 
                    <p className={`${!navIsOpen ? "hidden pointer-events-none" : "link-name text-nowrap"}`}>{link.name}</p> 
                    <div className={`${navIsOpen ? "hidden" : hoveredIndex === i ? "pseudo-element gray2" : "hidden"}`}><p className="text-nowrap z-20">{link.name}</p></div> 
                    <div className={`${navIsOpen ? "hidden" : hoveredIndex === i ? `pseudo-element2 gray2` : "hidden"}`}></div> 
                  </NavLink> 
                ); 
              })} 
            </div>

            <ToggleSideBar navIsOpen={navIsOpen} toggleNav={toggleNav}/>
          </div> 
        </div>
      </nav> 
    </section> 
  ); 
}; 
export default SideNav;
