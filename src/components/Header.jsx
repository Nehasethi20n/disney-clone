/* eslint-disable react/jsx-key */
import { HiHome, HiMagnifyingGlass, HiStar, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem.jsx";
import { useState } from "react";
function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const menu = [
    {
      icon: HiHome,
      label: "HOME",
    },
    {
      icon: HiMagnifyingGlass,
      label: "SEARCH",
    },
    {
      icon: HiPlus,
      label: "WATCHLIST",
    },
    {
      icon: HiStar,
      label: "ORIGINALS",
    },
    {
      icon: HiTv,
      label: "SERIES",
    },
  ];
  return (
    <div className="flex items-center justify-between gap-4 p-2 bg-slate-900">
      <div className="flex items-center gap-6 m-2">
        <img src="/images/disneyLogo.png" alt="Disney" className="size-12 md:size-14 object-cover mr-3" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem Icon={item.icon} label={item.label} />
          ))}
        </div>
        <div className="flex md:hidden gap-6">
          {menu.map((item, index) => index < 3 && <HeaderItem Icon={item.icon} label="" />)}
          <button onClick={handleToggle}>
            <div className="md:hidden">
              <HeaderItem Icon={HiDotsVertical} label="" />
              {toggle ? (
                <div className="absolute mt-3 bg-slate-700 text-white p-3">
                  {menu.map((item, index) => index > 2 && <HeaderItem Icon={item.icon} label={item.label} />)}
                </div>
              ) : null}
            </div>
          </button>
        </div>
      </div>
      <img
        src="/images/Person.png"
        className="size-10 md:size-12 mr-3"
        alt="Person_image"
      />
    </div>
  );
}

export default Header;
