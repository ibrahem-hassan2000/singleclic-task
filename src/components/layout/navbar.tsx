import  { useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowIcons, MenuIcons } from "../../assets/icons/icons";
import Logo from "../logo";
import ShopCounter from "../shop-counter";
interface LinksMenuProps {
  title: string;
  type: "normal" | "dropdown";
  link: string | null;
  linksDrop?: LinksMenuProps[];
}
function Navbar() {
  const [openMenus, setOpenMenus] = useState(false);
  const [openDropdownMenus, setOpenDropdownMenus] = useState(false);
  const { pathname } = useLocation();

  const LinksMenu: LinksMenuProps[] = [
    {
      title: "Home",
      type: "normal",
      link: "/",
    },
    {
      title: "Categories",
      type: "dropdown",
      link: null,
      linksDrop: [
        {
          title: "Men",
          type: "normal",
          link: "/category/men's clothing",
        },
        {
          title: "Women",
          type: "normal",
          link: "/category/women's clothing",
        },
        {
          title: "jeweler",
          type: "normal",
          link: "/category/jewelery",
        },
        {
          title: "Electronics",
          type: "normal",
          link: "/category/electronics",
        },
      ],
    },
    {
      title: "About",
      type: "normal",
      link: "/about",
    },
    {
      title: "Contact",
      type: "normal",
      link: "/contact",
    },
  ];
  return (
    <nav className="bg-gray-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex items-center gap-x-3 md:hidden">
          <ShopCounter />

          <button
            data-collapse-toggle="navbar-dropdown"
            onClick={() => {
              setOpenMenus(!openMenus);
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <MenuIcons />
          </button>
        </div>
        <div
          className={
            openMenus
              ? "w-full md:flex md:w-auto  items-center gap-x-4"
              : "hidden w-full md:flex items-center gap-x-4  md:w-auto"
          }
          id="navbar-dropdown"
        >
          <ul className="flex flex-col gap-y-1 font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            {LinksMenu.map((linkMenu) => {
              return linkMenu.type === "normal" ? (
                <li key={linkMenu.title}>
                  <Link
                    to={linkMenu.link || "#"}
                    className={`block py-2 px-3 text-white  rounded-sm md:bg-transparent  md:p-0  ${
                      pathname === linkMenu.link
                        ? " md:text-blue-400 bg-blue-400 md:bg-transparent"
                        : ""
                    }
                      `}
                  >
                    {linkMenu.title}
                  </Link>
                </li>
              ) : (
                <li key={linkMenu.title}>
                  <button
                    id="dropdownNavbarLink"
                    onClick={() => {
                      setOpenDropdownMenus(!openDropdownMenus);
                    }}
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 px-3  rounded-sm  md:border-0  md:p-0 md:w-auto text-white md:hover:text-blue-400 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent"
                  >
                    {linkMenu.title}
                    <ArrowIcons />
                  </button>

                  <div
                    id="dropdownNavbar"
                    className={`z-10 md:absolute w-[90%] mx-auto md:mx-0 md:w-44 md:my-0 my-2  font-normal duration-300 ease-in  divide-y rounded-lg shadow-sm  bg-gray-700 divide-gray-600 ${
                      openDropdownMenus
                        ? "block opacity-100"
                        : "hidden opacity-0"
                    }`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      {linkMenu.linksDrop?.map((linkDrop) => {
                        return (
                          <li key={linkDrop.title}>
                            <Link
                              to={linkDrop.link || "#"}
                              className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                            >
                              {linkDrop.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="md:block hidden">
            <ShopCounter />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
