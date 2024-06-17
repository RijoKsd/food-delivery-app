import { useState } from "react";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navLinks = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Menu",
      link: "menu",
    },
    {
      name: "Mobile-app",
      link: "mobile-app",
    },
    {
      name: "Contact us",
      link: "contact",
    },
  ];
  return (
    <div className=" pt-5 flex justify-between items-center">
      <img src={assets.logo} alt="logo" className="w-24 lg:w-36" />
      <ul className="flex gap-5 cursor-pointer text-link text-sm lg:text-lg max-md:hidden">
        {/* Nav link generate using map function */}
        {navLinks.map((link, index) => (
          <li
            key={index}
            onClick={() => setMenu(link.link)}
            className={
              menu === link.link
                ? "pb-0.5 border-b border-solid border-link"
                : ""
            }
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5 lg:gap-10">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="relative">
          <img src={assets.basket_icon} alt="cart"  />
          <div className="dot absolute min-w-[10px] min-h-[10px] bg-tomato rounded-md -top-2 -right-2"></div>
        </div>
        <button className="bg-transparent text-link text-base border border-solid border-tomato py-2 px-6  lg:py-2.5 lg:px-7 rounded-[50px] duration-300 hover:bg-[#fff4f2]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
