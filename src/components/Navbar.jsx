import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const current = navLinks.find((nav) => nav.id === location.pathname);
    if (current) setActive(current.title);
  }, [location]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Twisha&nbsp;
            <span className="sm:block hidden">'s World</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] z-10 object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setToggle(false)}
              />

              {/* Slide-in Nav Drawer */}
              <div className="fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-lg shadow-xl z-50 flex flex-col p-6 animate-slide-in">
                {/* Close Icon */}
                <div className="flex justify-end">
                  <button onClick={() => setToggle(false)}>
                    <img
                      src={close}
                      alt="Close menu"
                      className="w-6 h-6 object-contain cursor-pointer"
                    />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="mt-10 space-y-6">
                  {navLinks.map((nav) => (
                    <Link
                      key={nav.id}
                      to={nav.id}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                      className={`block text-lg font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-200 ${
                        active === nav.title
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {nav.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
